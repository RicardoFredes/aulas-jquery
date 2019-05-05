/* Criando eventos de Mouse sobre o menu */
$('#interruptor > img').on('click', function() {
    $('#lampada').toggleClass('apagada');
    if ($('#lampada').hasClass('apagada')) {
        $('#mensagem').text('Lâmpada ligada');
    } else {
        $('#mensagem').text('Lâmpada desligada');
    }
});