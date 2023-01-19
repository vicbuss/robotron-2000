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
