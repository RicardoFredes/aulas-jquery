$('#sete-maravilhas > ul > li').on('click', function () {
    // Pegando as informações
    const imagem = $('img', this).attr('src');
    const numero = $('span', this).text();
    const titulo = $('h3', this).text();
    const texto = $('p', this).text();
    // Passando as informações para a apresentação
    $('#sete-maravilhas-apresentacao img').attr('src', imagem);
    $('#sete-maravilhas-apresentacao h3').text(numero + '. ' + titulo);
    $('#sete-maravilhas-apresentacao p').text(texto);
});