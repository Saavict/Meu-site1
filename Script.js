// Função para verificar a idade
function verificarIdade() {
    const idade = parseInt(document.getElementById("idade-input").value);
    const resultadoIdade = document.getElementById("resultado-idade");

    if (idade === 18) {
        resultadoIdade.textContent = "Correto! Tenho 18 anos.";
    } else {
        resultadoIdade.textContent = "Errado! Tente novamente.";
    }
}

// Função para exibir/esconder as informações de contato
const botaoContato = document.getElementById("mostrar-contato");
const contatoInfo = document.getElementById("contato-info");

botaoContato.addEventListener("click", function() {
    if (contatoInfo.style.display === "none") {
        contatoInfo.style.display = "block";
        botaoContato.textContent = "Esconder Contato";
    } else {
        contatoInfo.style.display = "none";
        botaoContato.textContent = "Mostrar Contato";
    }
});

// Função para verificar o ano de nascimento
function verificarAno() {
    const anoNascimento = parseInt(document.getElementById("ano-input").value);
    const resultadoAno = document.getElementById("resultado-ano");
    const anoAtual = new Date().getFullYear();
    const idadeAtual = 18;
    const anoCorreto = anoAtual - idadeAtual;

    if (anoNascimento === anoCorreto) {
        resultadoAno.textContent = "Correto! Nasci em " + anoCorreto + ".";
    } else {
        resultadoAno.textContent = "Errado! Tente novamente.";
    }
}
