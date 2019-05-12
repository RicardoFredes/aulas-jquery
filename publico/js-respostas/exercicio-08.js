// Copiando um secao para duplicar posteriormente
const section = $('section').clone();

$(window).scroll(function () {
    if (document.body.clientHeight === window.innerHeight + window.scrollY) {
        // Criando elementos
        const novaSection = section.clone();
        const linha = document.createElement('hr');
        // Adicionando elementos na dom
        $(linha).appendTo(document.body);
        $(novaSection).appendTo(document.body);
    }
});