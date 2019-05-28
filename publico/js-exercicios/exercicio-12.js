// constantes do jogo
const API_SORTEIO = 'https://api-super-trunfo.fredes.now.sh/cartas/sorteio';
const PONTUACAO_MAXIMA = 5;

// Funcões auxiliares
function buscarCartas() {
	$.ajax({
		url: API_SORTEIO,
		method: 'GET',
		dataType: 'json',
		beforeSend: carregando,
		success: mostrarCartas,
	});
}

function carregando () {
  $('#carregando').show();
}

function compararHabilidades (valorHabilidade1, valorHabilidade2) {
	const numeroHabilidade1 = Number(valorHabilidade1);
	const numeroHabilidade2 = Number(valorHabilidade2);

	if (numeroHabilidade1 === numeroHabilidade2) {
		// console.log('Rodada empatada');
		marcarPlacar(0, 0, 'Rodada empatada');
	} else if (numeroHabilidade1 > numeroHabilidade2) {
		// console.log('Você ganhou a rodada');
		marcarPlacar(1, 0, 'Você ganhou a rodada');
	} else {
		// console.log('Você perdeu a rodada');
		marcarPlacar(0, 1, 'Você perdeu a rodada');
	}

	setTimeout(function() {
		$('#super-trunfo').on('click', verficarSeJogoTerminou);
	}, 300);
}

function marcarPlacar(pontosJogador1, pontosJogador2, mensagem) {
	$('#mensagem-do-jogo').text(mensagem);

	const pontosAtuaisJogador1 = $('#pontos-do-jogador-1').text();
	const pontosAtuaisJogador2 = $('#pontos-do-jogador-2').text();

	const pontosTotaisJogador1 = Number(pontosAtuaisJogador1) + pontosJogador1;
	const pontosTotaisJogador2 = Number(pontosAtuaisJogador2) + pontosJogador2;

	$('#pontos-do-jogador-1').text(pontosTotaisJogador1);
	$('#pontos-do-jogador-2').text(pontosTotaisJogador2);
}

function limparDOM() {
	$('#escopo').hide();
  $('#instrucoes').hide();
  $('#carregando').hide();
  $('#botao-iniciar-jogo').text('INICIAR JOGO');
}

function iniciarJogo() {
	$('#pontos-do-jogador-1').text('0');
	$('#pontos-do-jogador-2').text('0');
	$('#botao-iniciar-jogo').hide();
	buscarCartas();
}

function mostrarCartas(dadosRecebidos) {
	$('#carregando').hide();
	$('#campo-de-batalha').removeClass('minimizado');

	const cartaJogador1 = dadosRecebidos[0];
	const cartaJogador2 = dadosRecebidos[1];

	mostrarDadosRecebidosNaCarta(cartaJogador1, $('#carta-jogador-1'));
	mostrarDadosRecebidosNaCarta(cartaJogador2, $('#carta-jogador-2'));

	console.log(dadosRecebidos);
	$('#campo-de-batalha li').on('click', selecionarHabilidades);
}

function mostrarDadosRecebidosNaCarta(timeDeFutebol, elementoSelecionado) {
	const srcDaBandeira = timeDeFutebol.bandeira.replace('..', '../publico');

	/*
	como estava: ../img/bandeiras/islandia.png
	como ficou:  ../publico/img/bandeiras/islandia.png
	*/

	$('img', elementoSelecionado).attr('src', srcDaBandeira);
	$('h1', elementoSelecionado).text(timeDeFutebol.nome);
	$('ul > li.ataque > span', elementoSelecionado).text(timeDeFutebol.ataque);
	$('ul > li.meio > span', elementoSelecionado).text(timeDeFutebol.meio);
	$('ul > li.defesa > span', elementoSelecionado).text(timeDeFutebol.defesa);
	$('ul > li.titulos > span', elementoSelecionado).text(timeDeFutebol.titulos);
	$('ul > li.aparicao_copas > span', elementoSelecionado).text(timeDeFutebol.aparicao_copas);
}

function reiniciarRodada() {
	limparCartas();
	setTimeout(function() {
		buscarCartas();
	}, 500);
}

function selecionarHabilidades() {
	$('#campo-de-batalha li').off('click');
	$('#carta-jogador-2').removeClass('virada');

	const classeSelecionada = $(this).attr('class');
	const habilidadeJogador2 = $('#carta-jogador-2 li.' + classeSelecionada);

	$(this).addClass('escolhido');
	habilidadeJogador2.addClass('escolhido');

	const valorHabilidade1 = $('span', this).text();
	const valorHabilidade2 = $('span', habilidadeJogador2).text();

	compararHabilidades(valorHabilidade1, valorHabilidade2);
}

function verficarSeJogoTerminou() {
	const pontosJogador1 = $('#pontos-do-jogador-1').text();
	const pontosJogador2 = $('#pontos-do-jogador-2').text();

	const pontosNumericosJogador1 = Number(pontosJogador1);
	const pontosNumericosJogador2 = Number(pontosJogador2);

	if (pontosNumericosJogador1 >= PONTUACAO_MAXIMA ) {
		return finalizarJogo();
	}
	if (pontosNumericosJogador2 >= PONTUACAO_MAXIMA) {
		return finalizarJogo();
	}
	return reiniciarRodada();
}

function limparCartas() {
	$('#super-trunfo').off('click');
	$('#campo-de-batalha').addClass('minimizado');
	$('#carta-jogador-2').addClass('virada');
	$('#campo-de-batalha li').removeClass('escolhido');
}

function finalizarJogo() {
	limparCartas();
	$('#botao-iniciar-jogo').show().text('JOGAR NOVAMENTE');
}

// Execução do jogo
limparDOM();
$('#botao-iniciar-jogo').on('click', iniciarJogo);
