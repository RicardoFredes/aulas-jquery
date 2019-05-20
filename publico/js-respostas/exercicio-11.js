$('#carregando').hide();
$('#instrucoes').hide();

const url = 'https://api-de-charadas.fredes.now.sh/charada/json';

$('#botao-carregar-charada').on('click', buscarCharada);

function buscarCharada() {
	$.ajax({
		url: url,
		method: 'GET',
		dataType: 'json',
		beforeSend: mostraCarregando,
		success: carregaCharada,
	});
}

function mostraCarregando() {
	$('#carregando').show();
	$('#botao-carregar-charada').hide();
}

function escondeCarregando() {
	$('#carregando').hide();
	$('#botao-carregar-charada').show();
}

function carregaCharada(dadoRecebido) {
	console.log(dadoRecebido);
	const pergunta = dadoRecebido.pergunta;
	const resposta = dadoRecebido.resposta;
	$('#pergunta').text(pergunta);
	$('#resposta').text(resposta);
	escondeCarregando();
}