const api = 'https://api-de-charadas.fredes.now.sh/charada/json';
$('#instrucoes').hide();
$('#carregando').hide();
$('#mensagem-padrao').hide();

function buscaCharada() {
  $.ajax({
    url: api,
    method: 'GET',
    beforeSend: mostraCarregando,
    success: mostrarCharada,
    error: trataErro,
  });
}

function trataErro (erro) {
  console.log('Erro: ', erro);
}

function mostraCarregando () {
  // console.log('Carregando...');
  $('#carregando').show();
  $('#botao-carregar-charada').hide();
}

function mostrarCharada(dadoRecebido) {
  // console.log(dadoRecebido);
  const pergunta = dadoRecebido.pergunta;
  const resposta = dadoRecebido.resposta;
  $('#pergunta').text(pergunta);
  $('#resposta').text(resposta);

  $('#resposta').hide();
  $('#mensagem-padrao').show();

  $('#carregando').hide();
  $('#botao-carregar-charada').show();
}

$('#charada').on('click', function () {
  $('#resposta').toggle();
  $('#mensagem-padrao').toggle();
});

// buscaCharada();
$('#botao-carregar-charada').on('click', buscaCharada);
