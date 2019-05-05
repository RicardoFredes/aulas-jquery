/* Criando eventos de Mouse sobre o menu */
$('#menu > li').hover(eventoMouseSobreMenu, eventoMouseForaMenu);

/* Escondendo todos os submenus */
$('#menu > li > ul').hide();

function eventoMouseSobreMenu() {
    // $('ul', this).show();
    $('ul', this).slideDown();
}

function eventoMouseForaMenu() {
    $('ul', this).hide();
}

/* Criando evento de clique para aplicar a classe fechado */
$('#botao-do-menu').on('click', function(){
    $('#navegacao').toggleClass('fechado');
    if ($('#navegacao').hasClass('fechado')) {
        $('#mensagem').text('O menu foi fechado');
    }
    else {
        $('#mensagem').text('O menu foi aberto');
    }
        
});