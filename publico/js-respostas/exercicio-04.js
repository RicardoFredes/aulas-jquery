$('.bloco-de-texto-ver-mais > p').hide();
$('.bloco-de-texto-ver-mais > h3').on('click', function(){
    const blocoDeTextoVerMais = $(this).parent();
    $('p', blocoDeTextoVerMais).slideToggle();
});
