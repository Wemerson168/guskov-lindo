const perguntas = [
    {
        pergunta: "Qual linguagem é usada para estilizar páginas web?",
        opcoes: ["HTML", "CSS", "JavaScript"],
        correta: 1
    },
    {
        pergunta: "Qual tag cria um botão?",
        opcoes: ["<input>", "<button>", "<form>"],
        correta: 1
    },
    {
        pergunta: "Qual linguagem dá interatividade à página?",
        opcoes: ["CSS", "HTML", "JavaScript"],
        correta: 2
    }
];

let indice = 0;
let pontuacao = 0;

function carregarPergunta() {
    document.getElementById("pergunta").innerText = perguntas[indice].pergunta;
    document.getElementById("op0").innerText = perguntas[indice].opcoes[0];
    document.getElementById("op1").innerText = perguntas[indice].opcoes[1];
    document.getElementById("op2").innerText = perguntas[indice].opcoes[2];
}

function proximaPergunta() {
    const resposta = document.querySelector('input[name="resposta"]:checked');

    if (!resposta) {
        alert("Selecione uma resposta!");
        return;
    }

    if (parseInt(resposta.value) === perguntas[indice].correta) {
        pontuacao++;
    }

    indice++;

    if (indice < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("quiz").innerHTML =
            `<h2>Fim do Quiz!</h2>
             <p>Sua pontuação: ${pontuacao}/${perguntas.length}</p>`;
    }
}

carregarPergunta();
