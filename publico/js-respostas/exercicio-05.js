$('#carrossel > ul li > img').on('click', function () {
	const enderecoDaImagem = $(this).attr('src')
	$('#imagem-principal').attr('src', enderecoDaImagem);
});