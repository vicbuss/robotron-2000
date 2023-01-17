const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener ("click", (evento) => {
        let operacao = evento.target.textContent;
        let atributo = evento.target.parentElement.children[1];
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
