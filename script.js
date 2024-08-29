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

document.addEventListener('DOMContentLoaded', function() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const form = document.querySelector('form');

    // Função para mostrar mensagens de erro
    function mostrarErro(input, mensagem) {
        let aviso = input.nextElementSibling;
        if (!aviso || !aviso.classList.contains('aviso')) {
            aviso = document.createElement('div');
            aviso.className = 'aviso';
            input.after(aviso);
        }
        aviso.textContent = mensagem;
    }

    // Função para limpar mensagens de erro
    function limparErro(input) {
        let aviso = input.nextElementSibling;
        if (aviso && aviso.classList.contains('aviso')) {
            aviso.remove();
        }
    }

    // Validação do campo Nome
    nome.addEventListener('input', function() {
        if (nome.value.trim().length < 2) {
            mostrarErro(nome, 'O campo Nome deve ter pelo menos 2 caracteres.');
        } else {
            limparErro(nome);
        }
    });

    // Validação do campo Email
    email.addEventListener('input', function() {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            mostrarErro(email, 'Por favor, insira um email válido.');
        } else {
            limparErro(email);
        }
    });

    // Validação do campo Mensagem
    mensagem.addEventListener('input', function() {
        if (mensagem.value.trim().length < 10) {
            mostrarErro(mensagem, 'O campo Mensagem deve ter pelo menos 10 caracteres.');
        } else {
            limparErro(mensagem);
        }
    });

    // Validação no envio do formulário
    form.addEventListener('submit', function(event) {
        if (nome.value.trim().length < 5 || !regexEmail.test(email.value.trim()) || mensagem.value.trim().length < 10) {
            event.preventDefault();
            alert('Por favor, corrija os erros no formulário antes de enviar.');
        }
    });
});