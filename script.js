document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    const resultsContainer = document.getElementById("search-results");
    
    resultsContainer.innerHTML = ""; // Limpa resultados anteriores

    if (query) {
        // Simulação de resultados de pesquisa
        const mockResults = [
            `Resultado 1 para "${Suzane von Richthofen}"`,
            `Resultado 2 para "${A Chacina da Família de Ceilândia}"`,
            `Resultado 3 para "${Caso Eloá Cristina}"`
        ];

        mockResults.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.textContent = result;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        alert("Por favor, insira um termo de pesquisa.");
    }
});
