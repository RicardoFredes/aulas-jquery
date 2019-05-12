$('#modal').hide();
$('#abrir').on('click', function () {
    $('#modal').show();
});
$('#fechar').on('click', function () {
    $('#modal').hide();
});
$('#enviar').on('click', function () {
    const nome = $('#nome').val();
    const texto = 'Olá, ' + nome;
    $('#modal h3').text(texto);
    $('#modal').show();
});

// Melhorando a experiência de uso
$('#modal').on('click', function () {
    $('#modal').hide();
});
$('#modal > div').on('click', function (evento) {
    evento.stopPropagation();
});
