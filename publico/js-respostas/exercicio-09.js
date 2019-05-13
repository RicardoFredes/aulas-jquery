const imagens = $('img');

$(window).scroll(function () {
    imagens.each(function (indice, imagem) {
        if (window.scrollY + imagem.height > imagem.offsetTop) {
            imagem.src = imagem.dataset.src;
        }
    });
    
});