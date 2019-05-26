$('#instrucoes').hide();
$('#escopo').hide();
$('#carregando').hide();

iniciarPartida();
$('#botao-iniciar-jogo').text('INICIAR JOGO');

$('#botao-iniciar-jogo').on('click', buscarCartas);

const api = 'https://api-super-trunfo.fredes.now.sh/cartas/sorteio';
const pontosMaximos = 5;

function iniciarPartida() {
    $('#carta-jogador-1 ul > li').on('click', escolherHabilidade);
}

function reiniciarPartida() {
    iniciarPartida()
    $('#carta-jogador-1 ul > li').removeClass('escolhido');
    $('#carta-jogador-2 ul > li').removeClass('escolhido');
    $('#carta-jogador-1').removeClass('ganhou');
    $('#carta-jogador-2').addClass('virada').removeClass('ganhou');
    $('#botao-iniciar-jogo').text('NOVA PARTIDA');
    $('#campo-de-batalha').addClass('minimizado');
    $('#carregando').hide();
    $('#mensagem-do-jogo').text('');
    $('#campo-de-batalha').off('click');
    testarSejogoChegouAoFinalOuExecutaAcao(buscarCartas);
}

function buscarCartas() {
    $.ajax({
        url: api,
        method: 'GET',
        dataType: 'json',
        beforeSend: sinalizarCarregando,
        success: apresentarCartas,
        error: function(err) {
            console.log(err);
        }
    });
}

function sinalizarCarregando() {
    $('#botao-iniciar-jogo').hide();
    $('#carregando').show();
}

function apresentarCartas(cartas) {
    $('#carregando').hide();
    $('#campo-de-batalha').removeClass('minimizado');
    console.log(cartas);
    carregarDadosNaCarta($('#carta-jogador-1'), cartas[0]);
    carregarDadosNaCarta($('#carta-jogador-2'), cartas[1]);
}

function carregarDadosNaCarta(carta, dados) {
    $('img', carta).attr('src', dados.bandeira.replace('..', '../publico'));
    $('h1', carta).text(dados.nome);
    $('.ataque span', carta).text(dados.ataque);
    $('.meio span', carta).text(dados.meio);
    $('.defesa span', carta).text(dados.defesa);
    $('.titulos span', carta).text(dados.titulos);
    $('.aparicao_copas span', carta).text(dados.aparicao_copas);
}

function escolherHabilidade() {
    const valorJogador1 = Number($('span', this).text());
    const classe = $(this).attr('class');
    const valorDoJogador2 = Number($('#carta-jogador-2 ul > li.' + classe + '> span').text());

    $(this).addClass('escolhido');
    $('#carta-jogador-2 ul > li.' + classe).addClass('escolhido');

    const pontos1 = $('#pontos-do-jogador-1').text();
    const pontos2 = $('#pontos-do-jogador-2').text();

    console.log(valorJogador1, valorDoJogador2);

    if (valorJogador1 === valorDoJogador2) $('#mensagem-do-jogo').text('Empate');
    else if (valorJogador1 > valorDoJogador2) {
        console.log('Jogador 1 ganhou');
        $('#carta-jogador-1').addClass('ganhou');
        $('#pontos-do-jogador-1').text(Number(pontos1)+1);
        $('#mensagem-do-jogo').text('Você ganhou essa rodada :)');
    }
    else {
        console.log('Jogador 2 ganhou');
        $('#carta-jogador-2').addClass('ganhou');
        $('#pontos-do-jogador-2').text(Number(pontos2)+1);
        $('#mensagem-do-jogo').text('Você perdeu essa rodada :/');
    }

    $('#carta-jogador-2').removeClass('virada');
    $('#carta-jogador-1 ul > li').off('click');

    setTimeout(function () {
        $('#campo-de-batalha').on('click', reiniciarPartida);
    }, 300);
    
}

function testarSejogoChegouAoFinalOuExecutaAcao (acao) {
    const pontos1 = $('#pontos-do-jogador-1').text();
    if (pontosMaximos <= Number(pontos1)) {
        return finalizaJogo('Você ganhou!');
    }
    const pontos2 = $('#pontos-do-jogador-2').text();
    if (pontosMaximos <= Number(pontos2)) {
        return finalizaJogo('Você perdeu');
    }
    return setTimeout(acao, 300);
}

function finalizaJogo (mensagem) {
    console.log(mensagem);
    $('#mensagem-do-jogo').text('Partida finalizada | ' + mensagem);
    $('#botao-iniciar-jogo').show().text('JOGAR NOVAMENTE');
}
