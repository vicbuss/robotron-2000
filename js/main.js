const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener ("click", (evento) => {
        let operacao = evento.target.dataset.controle;
        let atributo = evento.target.parentElement.querySelector('[data-contador]');
        manipulaDados(operacao, atributo);
    });
});

function manipulaDados(operacao, atributo) {
    if(operacao === "-") {
        atributo.value--;
    } else {
        atributo.value++;
    }
}
