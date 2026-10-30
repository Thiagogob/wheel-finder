// Roda o pipeline de parsing nos PDFs de exemplo e mostra um diagnóstico:
// formato detectado, total de rodas, modelos suspeitos e modelos fora do padrão.
//
// Uso:
//   node test-parse.js                  -> usa os PDFs de exemplo da raiz do repo
//   node test-parse.js caminho.pdf ...  -> usa os PDFs informados
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const { detectPdfFormat, cleanPdfText, parseTxtToWheels } = require('./server');

const defaultPdfs = [
  path.join(__dirname, '..', 'old way pdf.pdf'),
  path.join(__dirname, '..', 'new way pdf.pdf'),
];

const files = process.argv.slice(2).length ? process.argv.slice(2) : defaultPdfs;

// Um modelo legítimo é curto e não contém quebra de linha nem medida de aro embutida.
function isSuspicious(modelo) {
  return modelo.includes('\n') || modelo.length > 12 || /\d{2}[xX]\d/.test(modelo);
}

(async () => {
  for (const file of files) {
    if (!fs.existsSync(file)) {
      console.log(`\n=== ${file} — ARQUIVO NÃO ENCONTRADO ===`);
      continue;
    }

    const data = await pdfParse(fs.readFileSync(file));
    const format = detectPdfFormat(data.text);
    const rodas = parseTxtToWheels(cleanPdfText(data.text, format));

    const models = new Set(rodas.map(r => r.MODELO));
    const suspicious = [...models].filter(isSuspicious);

    console.log(`\n=== ${path.basename(file)} ===`);
    console.log(`Formato detectado: ${format}`);
    console.log(`Rodas extraídas:   ${rodas.length}`);
    console.log(`Modelos únicos:    ${models.size}`);
    if (suspicious.length) {
      console.log(`MODELOS SUSPEITOS (${suspicious.length}):`);
      suspicious.forEach(m => console.log(`  ${JSON.stringify(m)}`));
    } else {
      console.log('Nenhum modelo suspeito.');
    }
  }
})();
