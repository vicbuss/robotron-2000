//Alteração de estatísticas do robô

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener ("click", (evento) => {
        let operacao = evento.target.dataset.controle;
        let atributo = evento.target.parentElement.querySelector("[data-contador]");
        manipulaDados(operacao, atributo);
        
        let peca = evento.target.dataset.peca;
        atualizaEstatisticas(peca, operacao);
    });
});

function manipulaDados(operacao, atributo) {
    if(operacao === "-") {
        atributo.value--;
    } else {
        atributo.value++;
    }
}

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas];    
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas];
        }
    });
}

//Alteração de cor do robô

const botaoAlterarCor = document.querySelector("[data-mudar-cor]");
const imagemRobo = document.getElementById("robotron");
const cores = [

    {"cor": "azul",
    "src" : "img/robos/Robotron 2000 - Azul.png"},
    
    {"cor": "amarelo", 
    "src" : "img/robos/Robotron 2000 - Amarelo.png"},
    
    {"cor": "branco", 
    "src" : "img/robos/Robotron 2000 - Branco.png"},
    
    {"cor": "preto",
    "src" : "img/robos/Robotron 2000 - Preto.png"},
    
    {"cor": "rosa",
    "src" : "img/robos/Robotron 2000 - Rosa.png"},
    
    {"cor": "vermelho",
    "src" : "img/robos/Robotron 2000 - Vermelho.png"}
];

let contadorCores = 0;
const numeroDeCores = Object.keys(cores).length;

botaoAlterarCor.onclick = () => {
    if(contadorCores < numeroDeCores - 1) {
        contadorCores++;
    } else {
        contadorCores = 0;
    }
    imagemRobo.src = cores[contadorCores].src;
};


