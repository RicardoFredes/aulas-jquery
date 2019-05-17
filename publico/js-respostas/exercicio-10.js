$('#instrucoes').hide();
$('#carregando').hide();

const cors = 'https://cors-anywhere.herokuapp.com/'
const api = 'https://api.sharedcount.com/v1.0/?apikey=1934f519a63e142e0d3c893e59cc37fe0172e98a&url='

$('#botao-pesquisar').on('click', pesquisaUrl);

$('#botao-remover-todos').on('click', removeTodasAsLinhasDaTabela);

function pesquisaUrl() {
    const url = $('#url').val();
    if(!url) return alert('Campo não pode estar vazio');
    const urlCompleta = cors + api + url
    $.ajax({
        url: urlCompleta,
        method: 'GET',
        dataType: 'json',
        beforeSend: mostraCarregando,
        success: adicionaNaTabela,
    });
}

function mostraCarregando() {
    $('#carregando').show();
}

function adicionaNaTabela(dadoRecebido) {
    const reacoes = dadoRecebido.Facebook.reaction_count;
    const compartilhamentos = dadoRecebido.Facebook.share_count;
    const url = $('#url').val();
    const posicao = $('table tbody tr').length + 1;
    const html = `
        <tr id="${posicao}">
            <td>${posicao}</td>
            <td>${url}</td>
            <td>${reacoes}</td>
            <td>${compartilhamentos}</td>
            <td><button onclick="removeLinha(${posicao})" class="remover">Remover</button></td>
        </tr>
    `;
    
    $('table tbody').append(html);
    
    $('#carregando').hide();
}

function removeLinha(posicao) {
    $('#' + posicao).remove();
}

function removeTodasAsLinhasDaTabela() {
    $('table tbody tr').remove();
}
