const express = require('express');
const cors = require('cors');
const products = require('./data/products.json');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const archiver = require('archiver');

const app = express();
const PORT = 3000;

// Middleware to accept file uploads
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

//Serve static images from the 'images' folder
app.use('/images', express.static(__dirname + '/images'));

// Route to get filtered products
app.get('/products', (req, res) => {
  const { color, size } = req.query;

  if (!color || !size) {
    return res.status(400).json({ error: "Color and size are required" });
  }

  const filtered = products.filter(
    p => p.color === color && p.size === size
  );

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



// Route: Upload + Parse PDF
// Função de parsing
function parseTxtToWheels(text) {
  const pattern = /([A-Z0-9\-]+)(\d{2,3}[xX][\d,\.]+)(\d{1,2}[xX]9\d(?:\/\d{3})?|\d{1,2}[xX][0-8]\d{2}(?:\/\d{3})?)(-?\d{1,3})([A-Z\s\.]+(?:\s*\(.*?\))?(?:\s*F\.L\*)?)\s*(\d{2,4})/g;

  const results = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    let [_, modelo, aro, pcd, offset, acabamento, raw_qty] = match;

    // Corrige acabamento sem parêntese fechado
    if (acabamento.includes('(') && !acabamento.includes(')')) {
      acabamento += ')';
    }

    // Regra de separação da quantidade
    let QTDE_SP = '0', QTDE_SC = '0';
    if (raw_qty.length === 4) {
      QTDE_SP = raw_qty.slice(0, 2);
      QTDE_SC = raw_qty.slice(2);
    } else if (raw_qty.length === 3) {
      if (raw_qty.startsWith('0')) {
        QTDE_SP = raw_qty[0];
        QTDE_SC = raw_qty.slice(1);
      } else {
        QTDE_SP = raw_qty.slice(0, 2);
        QTDE_SC = raw_qty.slice(2);
      }
    } else if (raw_qty.length === 2) {
      QTDE_SP = raw_qty[0];
      QTDE_SC = raw_qty[1];
    }

    results.push({
      MODELO: modelo.trim(),
      ARO: aro.trim(),
      PCD: pcd.trim(),
      OFFSET: offset.trim(),
      ACABAMENTO: acabamento.trim(),
      QTDE_SP,
      QTDE_SC
    });
  }

  return results;
}


// Rota de upload
app.post('/upload', upload.single('stock'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(fileBuffer);
    const rawText = data.text;

    fs.writeFileSync('parsed-pdf-output.txt', rawText, 'utf8');
    console.log('PDF text saved to parsed-pdf-output.txt');

    // Limpeza do texto antes do parsing
    const cleanText = rawText
      .replace(/Pag\/\s*/g, '')
      .replace(/MODELOFOTOSAROPCDACABAMENTO.*?@mkrrodas \| mkrrodas/g, '')
      .replace(/\d{2}\/\d{2}\/\d{4}.*?\.(jasper)?/g, '')
      .replace(/[^\S\r\n]+/g, ' ');

    const rodas = parseTxtToWheels(cleanText);
    fs.writeFileSync('stock-data.json', JSON.stringify(rodas, null, 2), 'utf8');
    res.setHeader('Content-Type', 'application/json');
    return res.json(rodas);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to parse file' });
  }
});

const stockJsonPath = path.join(__dirname, 'stock-data.json');
app.use('/images', express.static(__dirname + '/images'));


// --- Rota de Busca de Rodas (/search) ---
app.get('/search', (req, res) => {
    // Extrai os parâmetros de filtro da query string da requisição
    const { aro, tala, pcd, acabamento } = req.query;

    // Validação básica: 'aro' é um parâmetro obrigatório
    if (!aro) {
        return res.status(400).json({ error: 'Parâmetro "aro" ausente. Por favor, selecione um aro.' });
    }

    try {
        // Lê o arquivo JSON de estoque
        const data = JSON.parse(fs.readFileSync(stockJsonPath, 'utf8'));

        // Converte os parâmetros de query que podem vir como string ou array de strings para arrays
        const selectedTalas = Array.isArray(tala) ? tala : tala ? [tala] : [];
        const selectedPCDs = Array.isArray(pcd) ? pcd : pcd ? [pcd] : [];
        let selectedAcabamentos = Array.isArray(acabamento) ? acabamento : acabamento ? [acabamento] : [];

        // Aplica todos os filtros aos dados do estoque
        const results = data.filter(wheel => {
            // --- FILTRO OBRIGATÓRIO: ESTOQUE SÃO PAULO (QTDE_SP >= 4) ---
            // Verifica se 'QTDE_SP' existe, é um número válido e maior ou igual a 4.
            // O '+' tenta converter a string para número. Se não for um número válido, `isNaN` retornará true.
            const estoqueSPvalido = wheel.QTDE_SP !== undefined && !isNaN(+wheel.QTDE_SP) && (+wheel.QTDE_SP >= 4);
            if (!estoqueSPvalido) {
                return false; // Exclui a roda imediatamente se não atender ao requisito de estoque em SP
            }

            // --- FILTRO DE ARO ---
            // Verifica se o ARO da roda inclui o aro selecionado
            const aroMatch = wheel.ARO.includes(aro);
            if (!aroMatch) return false;

            // --- FILTRO DE TALA ---
            // Extrai a tala da string ARO (ex: "17X7.0" -> "7.0")
            const talaFromAro = wheel.ARO.split(/[xX]/)[1]?.replace(',', '.');
            // Verifica se nenhuma tala foi selecionada OU se a tala da roda está entre as selecionadas
            const talaMatch = selectedTalas.length === 0 || selectedTalas.includes(talaFromAro);
            if (!talaMatch) return false;

            // --- FILTRO DE PCD (FURAÇÃO) ---
            // Converte o PCD da roda para minúsculas e divide por '/' (ex: "4x100/5x112")
            const pcdLower = wheel.PCD.toLowerCase();
            const pcdParts = pcdLower.split('/');
            // Verifica se nenhum PCD foi selecionado OU se algum dos PCDs da roda contém um dos selecionados
            const pcdMatch = selectedPCDs.length === 0 || selectedPCDs.some(sel =>
                pcdParts.some(p => p.includes(sel.toLowerCase()))
            );
            if (!pcdMatch) return false;

            // --- FILTRO DE ACABAMENTO (COM TRATAMENTO PARA "TODOS") ---
            let acabamentoMatch = true; // Assume verdadeiro por padrão (roda passa no filtro de acabamento)

            // Se "TODOS" estiver na lista de acabamentos selecionados, ou se a lista estiver vazia,
            // o filtro de acabamento é ignorado (ou seja, 'acabamentoMatch' permanece 'true').
            if (selectedAcabamentos.includes("TODOS") || selectedAcabamentos.length === 0) {
                acabamentoMatch = true;
            } else {
                // Caso contrário (acabamentos específicos selecionados e "TODOS" não está presente),
                // verifica se o acabamento da roda inclui algum dos acabamentos selecionados.
                acabamentoMatch = selectedAcabamentos.some(sel =>
                    wheel.ACABAMENTO.toUpperCase().includes(sel.toUpperCase())
                );
            }
            if (!acabamentoMatch) return false;

            // Se a roda passou por todos os filtros, ela é incluída nos resultados
            return true;
        });

        // Envia os resultados filtrados como resposta JSON
        return res.json(results);

    } catch (err) {
        console.error("Erro ao ler JSON do estoque ou processar filtros:", err);
        // Retorna um erro 500 se houver um problema no servidor
        return res.status(500).json({ error: 'Erro interno no servidor ao processar os filtros.' });
    }
});



app.post('/download-zip', async (req, res) => {
    const imageUrls = req.body.urls;

    if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
        return res.status(400).send('Nenhuma URL de imagem fornecida.');
    }

    const zip = archiver('zip', {
        zlib: { level: 9 } // Nível de compressão
    });

    // Define os cabeçalhos para o download do arquivo ZIP
    res.attachment('rodas_filtradas.zip');
    zip.pipe(res);

    let imageCount = 0;
    for (const url of imageUrls) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.warn(`Não foi possível baixar a imagem: ${url} - Status: ${response.status}`);
                continue; // Pula para a próxima imagem se o download falhar
            }
            const buffer = await response.buffer();
            const fileName = path.basename(url); // Extrai o nome do arquivo da URL
            zip.append(buffer, { name: fileName });
            imageCount++;
        } catch (error) {
            console.error(`Erro ao processar imagem ${url}:`, error);
        }
    }

    if (imageCount === 0) {
        return res.status(500).send('Nenhuma imagem foi baixada com sucesso para o ZIP.');
    }

    zip.finalize(); // Finaliza a criação do arquivo ZIP

    zip.on('error', (err) => {
        console.error('Erro ao criar o ZIP:', err);
        res.status(500).send('Erro interno do servidor ao criar o arquivo ZIP.');
    });

    zip.on('end', () => {
        console.log('Arquivo ZIP enviado com sucesso.');
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


