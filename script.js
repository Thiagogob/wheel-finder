const marcaMap = {
  "ALFA": ["FIAT"],
  "BRW119": ["VW"],
  "AMG": ["MERCEDES"],
  "ARION": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "B20": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "BALLINA": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "BMW": ["BMW"],
  "BRW149": ["GM"],
  "BRW157": ["FORD", "PEUGEOT"],
  "BRW186": ["GM"],
  "BRW181": ["VW"],
  "BRW18": ["VW"],
  "BRW83": ["VW"],
  "BRW12": ["VW"],
  "BRW13": ["VW"],
  "BRW18": ["GM"],
  "BRW97": ["VW"],
  "BRW181": ["VW"],
  "CENTAU": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "DISCOVE": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "DISCOV": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "E47": ["VW"],
  "E55": ["FORD", "GM"],
  "E56": ["FORD", "GM"],
  "E58": ["FORD", "GM"],
  "E63": ["FORD", "GM"],
  "E64": ["FORD", "GM"],
  "E87": ["FORD", "GM"],
  "E90": ["FORD", "GM"],
  "F1": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "F2": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "F3": ["VW"],
  "F4": ["GM"], 
  "FUCHS": ["VW"],
  "G109": ["VW"],
  "G15": ["VW"],
  "GLI": ["VW"],
  "GTS": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "M02": ["VW", "GM", "FIAT"],
  "M05": ["GM"],
  "M06": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "M07": ["RENAULT"],
  "M08": ["GM"],
  "M10": ["GM"],
  "M11": ["VW", "GM"],
  "M12": ["TOYOTA", "MITSUBISHI", "GM"],
  "M15": ["TOYOTA", "MITSUBISHI", "GM"],
  "M16": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "M17": ["VW", "GM"],
  "M18": ["VW", "GM"],
  "M19": ["VW", "GM"],
  "M20": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "M21": ["GM"],
  "M22": ["TOYOTA", "MITSUBISHI", "GM", "OFFROAD"],
  "M23": ["TOYOTA", "MITSUBISHI", "GM", "OFFROAD"],
  "M25": ["VW", "HYUNDAI"],
  "M26": ["VW", "GM"],
  "M27": ["FORD"],
  "M28": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "M30": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD", "JEEP"],
  "M31": ["TOYOTA", "MITSUBISHI", "GM", "OFFROAD"],
  "M32": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "M34": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "FIAT"],
  "MAGNA": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "MK7": ["VW", "HYUNDAI"],
  "MORGAN": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "MTB": ["MITSUBISHI"],
  "NEWSUN": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "FIAT"],
  "NEWSU": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "FIAT"],
  "PINGO": ["VW"],
  "ORBITA": ["VW"],
  "POLO": ["VW", "TOYOTA", "GM", "FIAT"],
  "Q8": ["AUDI", "VW", "HYUNDAI"],
  "R06": ["VW"],
  "R07": ["VW"],
  "R10": ["VW"],
  "R14":["FIAT"],
  "R15": ["GM"],
  "R16": ["GM"],
  "R17": ["FIAT"],
  "R18": ["FIAT"],
  "R20": ["FIAT"],
  "R23": ["FIAT"],
  "R26": ["GM"],
  "R29": ["HONDA"],
  "R32": ["TOYOTA"],
  "R37": ["TOYOTA"],
  "R39": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "R41": ["PEUGEOT", "CITROEN"],
  "R42": ["GM"],
  "R43": ["HYUNDAI"],
  "R45": ["VW"],
  "R46": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "R50": ["VW"],
  "R51": ["VW"],
  "R53": ["GM"],
  "R54": ["BMW", "HYUNDAI"],
  "R56": ["BMW"],
  "R60": ["FIAT"],
  "R62": ["PEUGEOT", "CITROEN"],
  "R63": ["VW"],
  "R64": ["TOYOTA"],
  "R65": ["VW"],
  "R66": ["FORD"],
  "R71": ["VW"],
  "R72": ["TOYOTA"],
  "R73": ["FIAT"],
  "R74": ["VW"],
  "R75": ["VW"],
  "R76": ["JEEP"],
  "R77": ["FIAT"],
  "R78": ["HYUNDAI"],
  "R79": ["GM"], 
  "R80": ["GM"],
  "R81": ["TOYOTA"],
  "R82": ["GM"],
  "R83": ["VW"],
  "R84": ["VW"],
  "R87": ["VW"],
  "R88": ["FIAT"],
  "R89": ["TOYOTA"],
  "R91": ["FIAT"],
  "R92": ["FIAT"],
  "R93": ["VW"],
  "R94": ["VW"],
  "R96": ["TOYOTA"],
  "R97": ["RENAULT"],
  "R99": ["HONDA"],
  "S01/L03": ["NISSAN"],
  "S02": ["FIAT"],
  "S03": ["FIAT"],
  "S04": ["HONDA"],
  "S05": ["PEUGEOT"],
  "S06": ["HYUNDAI"],
  "S07": ["VW"],
  "S08": ["HYUNDAI"],
  "S10": ["PEUGEOT"],
  "S11": ["TOYOTA"],
  "S12": ["RENAULT"],
  "S13": ["HYUNDAI"],
  "S14": ["CITROEN", "PEUGEOT"],
  "S15": ["FIAT"],
  "S16": ["HYUNDAI"],
  "S17": ["TOYOTA"],
  "S18": ["VW"],
  "S19": ["VW"],
  "S20": ["HYUNDAI"],
  "S21": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA"],
  "S22": ["TOYOTA"],
  "S23": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN"],
  "S24": ["GM"],
  "S25": ["VW"],
  "S27":["FIAT"],
  "S29":["FIAT"],
  "S30":["GM"],
  "S31":["TOYOTA"],
  "S32":["TOYOTA"],
  "S33":["NISSAN"],
  "S34":["FIAT"],
  "S35": ["GM"],
  "S36": ["MITSUBISHI"],
  "S37": ["HYUNDAI"],
  "S38": ["PEUGEOT"],
  "S39": ["TOYOTA"],
  "S40": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN"],
  "S41": ["FIAT"],
  "S42": ["HYUNDAI"],
  "S43": ["CITROEN", "PEUGEOT"],
  "S44": ["VW"],
  "S45": ["FIAT", "VW", "GM", "HONDA", "RENAULT", "HYUNDAI"],
  "S46": ["VW"],
  "S47": ["GM", "VW", "HONDA"],
  "S48": ["VW"],
  "S49": ["TOYOTA", "VW", "GM"],
  "S50": ["FORD"],
  "S51": ["NISSAN"],
  "S52": ["HYUNDAI"],
  "S53": ["GM", "TOYOTA", "VW", "FIAT"],
  "S54": ["VW"],
  "S55": ["FIAT"],
  "S56": ["FIAT"],
  "S57": ["GM"],
  "S58": ["VW"],
  "SAMPSO": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "SAMPS": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "STROLLE": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "STROLL": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "SUMMER": ["VW"],
  "SUNLIN": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "L01": ["VW"],
  "L04": ["LAND", "FORD"],
  "K27": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K34": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K54": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K56": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K57": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K60": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "FORD"],
  "K63": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K64": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K67": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI", "BMW"],
  "K71": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K72": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K73": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K74": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K75": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "K76": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "TARANT": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "TE37": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "TT 2010": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"],
  "VRS": ["VW", "GM", "RENAULT", "HONDA", "TOYOTA", "NISSAN", "HYUNDAI"]
};


function searchProducts() {
  const color = document.getElementById("colorDropdown").value.toLowerCase();
  const size = document.getElementById("sizeDropdown").value.toLowerCase();

  if (!window.stockData || window.stockData.length === 0) {
    alert("No stock data available.");
    return;
  }

  const results = window.stockData.filter(wheel => {
    return (
      wheel.ACABAMENTO.toLowerCase().includes(color) &&
      wheel.ARO.toLowerCase().includes(size)
    );
  });

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No matching wheels found.</p>";
    return;
  }

  results.forEach(wheel => {
    const div = document.createElement("div");
    div.classList.add("card", "mb-3", "p-3");
    div.innerHTML = `
      <h5>${wheel.MODELO}</h5>
      <p><strong>ARO:</strong> ${wheel.ARO} | <strong>PCD:</strong> ${wheel.PCD}</p>
      <p><strong>Offset:</strong> ${wheel.OFFSET}</p>
      <p><strong>Acabamento:</strong> ${wheel.ACABAMENTO}</p>
      <p><strong>SP:</strong> ${wheel.QTDE_SP} | <strong>SC:</strong> ${wheel.QTDE_SC}</p>
    `;
    resultsContainer.appendChild(div);
  });
}


async function uploadStock() {
  const fileInput = document.getElementById("stockFile");
  const file = fileInput.files[0];

  if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
    alert("Please upload a valid PDF file.");
    return;
  }

  const formData = new FormData();
  formData.append("stock", file);

  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error("Server responded with error");
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Invalid JSON response");
    }

    const parsedStock = await response.json();

    if (!Array.isArray(parsedStock) || parsedStock.length === 0) {
      alert("No products found in PDF.");
      return;
    }

    window.stockData = parsedStock;
    document.getElementById("filterSection").style.display = "block";
    alert("Stock successfully loaded!");
    
  } catch (err) {
    console.error("Failed to upload/parse PDF", err);
  }


}

async function searchByAroBackend() {
  const selectedAro = document.getElementById("sizeDropdown").value;

  if (!selectedAro) {
    alert("Selecione um aro primeiro.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/search?aro=${selectedAro}`);
    const results = await response.json();

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';

    if (!Array.isArray(results) || results.length === 0) {
      resultsContainer.innerHTML = "<p>Nenhum modelo encontrado.</p>";
      return;
    }

  results.forEach(wheel => {
    const container = document.createElement("div");

    const img = document.createElement("img");
    const normalized = wheel.MODELO.replace(/\s+/g, '').toUpperCase();
    img.src = `http://localhost:3000/images/${normalized}.jpg`;
    img.alt = wheel.MODELO;
    img.width = 200; // ajuste como quiser

    const label = document.createElement("p");
    label.textContent = wheel.MODELO;

    container.appendChild(img);
    container.appendChild(label);
    resultsContainer.appendChild(container);
  });


  } catch (err) {
    console.error("Erro ao buscar aro do backend:", err);
    alert("Erro na busca do servidor.");
  }
}

async function searchByFilters() {
    const aroDropdown = document.getElementById("aroDropdown");
    const talaDropdown = document.getElementById("talaDropdown");
    const pcdDropdown = document.getElementById("pcdDropdown");
    const finishDropdown = document.getElementById("finishDropdown");
    const marcaDropdown = document.getElementById("marcaDropdown");

    const selectedAro = aroDropdown?.value;
    const selectedTalas = Array.from(talaDropdown?.selectedOptions || []).map(opt => opt.value);
    const selectedPCDs = Array.from(pcdDropdown?.selectedOptions || []).map(opt => opt.value);
    const finishes = Array.from(finishDropdown?.selectedOptions || []).map(opt => opt.value);
    const selectedMarca = marcaDropdown?.value; // Captura a marca selecionada

    // Validação básica: Aro é obrigatório
    if (!selectedAro) {
        alert("Selecione um aro primeiro.");
        return;
    }

    try {
        const queryParams = new URLSearchParams();
        queryParams.append("aro", selectedAro);
        selectedTalas.forEach(tala => queryParams.append("tala", tala));
        selectedPCDs.forEach(pcd => queryParams.append("pcd", pcd));
        finishes.forEach(f => queryParams.append("acabamento", f));

        // Note: O filtro de estoque de SP não é mais passado aqui no frontend,
        // pois ele é aplicado de forma **obrigatória no backend** para todas as buscas.

        // Realiza a requisição ao backend
        // **IMPORTANTE:** Certifique-se de que 'http://localhost:3000' é o endereço e porta do seu backend Node.js
        const response = await fetch(`http://localhost:3000/search?${queryParams.toString()}`);
        if (!response.ok) {
            // Se a resposta não for OK (ex: 400, 500), joga um erro
            throw new Error(`Erro na resposta do servidor: ${response.status} ${response.statusText}`);
        }

        let results = await response.json(); // Converte a resposta para JSON

        // FILTRO DE MARCA (APLICADO NO FRONTEND)
        // Se uma marca foi selecionada no dropdown, filtra os resultados recebidos do backend
        if (selectedMarca) {
            results = results.filter(wheel => {
                const model = wheel.MODELO.toUpperCase(); // Converte o MODELO da roda para maiúsculas
                // Verifica se o modelo existe como chave no marcaMap E se a marca selecionada está associada a ele
                return marcaMap[model] && marcaMap[model].includes(selectedMarca);
            });
        }

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // Limpa os resultados anteriores

        // Exibe mensagem se nenhum modelo for encontrado após todos os filtros
        if (!Array.isArray(results) || results.length === 0) {
            resultsContainer.innerHTML = "<p>Nenhum modelo encontrado com os filtros aplicados.</p>";
            return;
        }

        // Itera sobre os resultados filtrados e os exibe
        results.forEach(wheel => {
            const container = document.createElement("div");
            container.style.marginBottom = "20px";
            container.style.border = "1px solid #ccc";
            container.style.padding = "10px";
            container.style.borderRadius = "5px";

            const img = document.createElement("img");
            // Lógica para construir o nome da imagem
            const furosMatch = wheel.PCD.match(/^(\d)[xX]/);
            const furos = furosMatch ? `${furosMatch[1]}F` : "";
            const acabamentoAbrev = wheel.ACABAMENTO.split(" ")[0]; // Pega a primeira palavra do acabamento
            const normalized = `${wheel.MODELO} ${furos} ${acabamentoAbrev}`.replace(/\s+/g, " ").toUpperCase();
            
            img.src = `http://localhost:3000/images/${normalized}.jpg`; // Caminho para suas imagens
            img.alt = wheel.MODELO;
            img.width = 200;
            img.style.display = "block"; // Para garantir que o margin-bottom funcione na imagem
            img.style.marginBottom = "10px";

            // Cria e adiciona parágrafos para cada propriedade da roda
            const modelo = document.createElement("p");
            modelo.textContent = `Modelo: ${wheel.MODELO}`;

            const acabamento = document.createElement("p");
            acabamento.textContent = `Acabamento: ${wheel.ACABAMENTO}`;

            const pcd = document.createElement("p");
            pcd.textContent = `PCD: ${wheel.PCD}`;

            const aro = document.createElement("p");
            aro.textContent = `Aro: ${wheel.ARO}`;

            const offset = document.createElement("p");
            offset.textContent = `Offset: ${wheel.OFFSET}`;

            // Exibe as quantidades de estoque de SP e SC
            const qtdeSP = document.createElement("p");
            qtdeSP.textContent = `Estoque SP: ${wheel.QTDE_SP || 'N/A'}`; // Mostra N/A se não houver
            qtdeSP.style.fontWeight = "bold"; // Destaca o estoque de SP

            const qtdeSC = document.createElement("p");
            qtdeSC.textContent = `Estoque SC: ${wheel.QTDE_SC || 'N/A'}`; // Mostra N/A se não houver

            // Adiciona todos os elementos ao contêiner da roda
            container.appendChild(img);
            container.appendChild(modelo);
            container.appendChild(acabamento);
            container.appendChild(pcd);
            container.appendChild(aro);
            container.appendChild(offset);
            container.appendChild(qtdeSP);
            container.appendChild(qtdeSC);

            resultsContainer.appendChild(container); // Adiciona o contêiner da roda à div de resultados
        });

    } catch (err) {
        console.error("Erro ao buscar por filtros:", err);
        alert("Ocorreu um erro ao buscar os dados das rodas. Por favor, tente novamente.");
    }
}


document.getElementById("downloadImagesFromBackend").addEventListener("click", () => {
    const images = document.querySelectorAll("#results img");

    if (images.length === 0) {
        alert("Nenhuma imagem para baixar.");
        return;
    }

    // Coleta as URLs das imagens
    const imageUrls = Array.from(images).map(img => img.src);

    // Envia as URLs para o backend
    fetch('http://localhost:3000/download-zip', { // Este é o endpoint que você criará no seu backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: imageUrls }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição ao backend para criar o ZIP.');
        }
        return response.blob(); // Espera a resposta como um blob (o arquivo ZIP)
    })
    .then(blob => {
        // Cria um URL para o blob e inicia o download
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "rodas_filtradas.zip"; // Nome do arquivo ZIP
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error("Erro ao baixar o ZIP:", error);
        alert("Ocorreu um erro ao tentar baixar o arquivo ZIP.");
    });
});









