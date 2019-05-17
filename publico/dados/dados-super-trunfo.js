const cartas = [
    {
        "tipo": "A1",
        "nome": "Russia",
        "ataque": 80,
        "defesa": 76,
        "meio": 78,
        "titulos": 0,
        "aparicao_copas": 11,
        "bandeira": "../img/bandeiras/russia.png"
    },
    {
        "tipo": "A2",
        "nome": "Alemanha",
        "ataque": 81,
        "meio": 85,
        "defesa": 84,
        "titulos": 4,
        "aparicao_copas": 19,
        "bandeira": "../img/bandeiras/alemanha.png"
    },
    {
        "tipo": "A3",
        "nome": "Brasil",
        "ataque": 86,
        "meio": 84,
        "defesa": 85,
        "titulos": 5,
        "aparicao_copas": 21,
        "bandeira": "../img/bandeiras/brasil.png"
    },
    {
        "tipo": "A4",
        "nome": "Portugal",
        "ataque": 85,
        "meio": 82,
        "defesa": 80,
        "titulos": 0,
        "aparicao_copas": 7,
        "bandeira": "../img/bandeiras/portugal.png"
    },
    {
        "tipo": "A5",
        "nome": "Argentina",
        "ataque": 87,
        "meio": 81,
        "defesa": 80,
        "titulos": 2,
        "aparicao_copas": 17,
        "bandeira": "../img/bandeiras/argentina.png"
    },
    {
        "tipo": "A6",
        "nome": "Belgica",
        "ataque": 86,
        "meio": 84,
        "defesa": 85,
        "titulos": 0,
        "aparicao_copas": 13,
        "bandeira": "../img/bandeiras/belgica.png"
    },
    {
        "tipo": "A7",
        "nome": "Polonia",
        "ataque": 82,
        "meio": 75,
        "defesa": 79,
        "titulos": 0,
        "aparicao_copas": 8,
        "bandeira": "../img/bandeiras/polonia.png"
    },
    {
        "tipo": "A8",
        "nome": "Franca",
        "ataque": 83,
        "meio": 85,
        "defesa": 82,
        "titulos": 1,
        "aparicao_copas": 15,
        "bandeira": "../img/bandeiras/franca.png"
    },
    {
        "tipo": "B1",
        "nome": "Espanha",
        "ataque": 84,
        "meio": 86,
        "defesa": 86,
        "titulos": 1,
        "aparicao_copas": 15,
        "bandeira": "../img/bandeiras/espanha.png"
    },
    {
        "tipo": "B2",
        "nome": "Suica",
        "ataque": 74,
        "meio": 78,
        "defesa": 77,
        "titulos": 0,
        "aparicao_copas": 11,
        "bandeira": "../img/bandeiras/suica.png"
    },
    {
        "tipo": "B3",
        "nome": "Inglaterra",
        "ataque": 84,
        "meio": 81,
        "defesa": 81,
        "titulos": 1,
        "aparicao_copas": 15,
        "bandeira": "../img/bandeiras/inglaterra.png"
    },
    {
        "tipo": "B4",
        "nome": "Colombia",
        "ataque": 81,
        "meio": 77,
        "defesa": 78,
        "titulos": 0,
        "aparicao_copas": 6,
        "bandeira": "../img/bandeiras/colombia.png"
    },
    {
        "tipo": "B5",
        "nome": "Mexico",
        "ataque": 79,
        "meio": 79,
        "defesa": 76,
        "titulos": 0,
        "aparicao_copas": 16,
        "bandeira": "../img/bandeiras/mexico.png"
    },
    {
        "tipo": "B6",
        "nome": "Uruguai",
        "ataque": 86,
        "meio": 76,
        "defesa": 79,
        "titulos": 2,
        "aparicao_copas": 13,
        "bandeira": "../img/bandeiras/uruguai.png"
    },
    {
        "tipo": "B7",
        "nome": "Croacia",
        "ataque": 76,
        "meio": 83,
        "defesa": 77,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/croacia.png"
    },
    {
        "tipo": "B8",
        "nome": "Peru",
        "ataque": 74,
        "meio": 72,
        "defesa": 71,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/peru.png"
    },
    {
        "tipo": "C1",
        "nome": "Costa Rica",
        "ataque": 70,
        "meio": 70,
        "defesa": 75,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/costa-rica.png"
    },
    {
        "tipo": "C2",
        "nome": "Suecia",
        "ataque": 74,
        "meio": 73,
        "defesa": 74,
        "titulos": 0,
        "aparicao_copas": 12,
        "bandeira": "../img/bandeiras/suecia.png"
    },
    {
        "tipo": "C3",
        "nome": "Tunisia",
        "ataque": 69,
        "meio": 69,
        "defesa": 70,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/tunisia.png"
    },
    {
        "tipo": "C4",
        "nome": "Egito",
        "ataque": 78,
        "meio": 72,
        "defesa": 71,
        "titulos": 0,
        "aparicao_copas": 3,
        "bandeira": "../img/bandeiras/egito.png"
    },
    {
        "tipo": "C5",
        "nome": "Senegal",
        "ataque": 76,
        "meio": 72,
        "defesa": 70,
        "titulos": 0,
        "aparicao_copas": 2,
        "bandeira": "../img/bandeiras/senegal.png"
    },
    {
        "tipo": "C6",
        "nome": "Ira",
        "ataque": 70,
        "meio": 69,
        "defesa": 69,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/ira.png"
    },
    {
        "tipo": "C7",
        "nome": "Dinamarca",
        "ataque": 75,
        "meio": 77,
        "defesa": 77,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/dinamarca.png"
    },
    {
        "tipo": "C8",
        "nome": "Islandia",
        "ataque": 73,
        "meio": 74,
        "defesa": 69,
        "titulos": 0,
        "aparicao_copas": 1,
        "bandeira": "../img/bandeiras/islandia.png"
    },
    {
        "tipo": "D1",
        "nome": "Servia",
        "ataque": 72,
        "meio": 74,
        "defesa": 74,
        "titulos": 0,
        "aparicao_copas": 12,
        "bandeira": "../img/bandeiras/servia.png"
    },
    {
        "tipo": "D2",
        "nome": "Nigeria",
        "ataque": 73,
        "meio": 71,
        "defesa": 70,
        "titulos": 0,
        "aparicao_copas": 6,
        "bandeira": "../img/bandeiras/nigeria.png"
    },
    {
        "tipo": "D3",
        "nome": "Japao",
        "ataque": 73,
        "meio": 72,
        "defesa": 73,
        "titulos": 0,
        "aparicao_copas": 6,
        "bandeira": "../img/bandeiras/japao.png"
    },
    {
        "tipo": "D4",
        "nome": "Marrocos",
        "ataque": 71,
        "meio": 71,
        "defesa": 73,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/marrocos.png"
    },
    {
        "tipo": "D5",
        "nome": "Panama",
        "ataque": 67,
        "meio": 68,
        "defesa": 69,
        "titulos": 0,
        "aparicao_copas": 1,
        "bandeira": "../img/bandeiras/panama.png"
    },
    {
        "tipo": "D6",
        "nome": "Coreia do Sul",
        "ataque": 73,
        "meio": 72,
        "defesa": 69,
        "titulos": 0,
        "aparicao_copas": 10,
        "bandeira": "../img/bandeiras/coreia-do-sul.png"
    },
    {
        "tipo": "D7",
        "nome": "Arabia Saudita",
        "ataque": 70,
        "meio": 69,
        "defesa": 70,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/arabia-saudita.png"
    },
    {
        "tipo": "D8",
        "nome": "Australia",
        "ataque": 69,
        "meio": 73,
        "defesa": 71,
        "titulos": 0,
        "aparicao_copas": 5,
        "bandeira": "../img/bandeiras/australia.png"
    }
]
// Helpers de funcoes
const executaUmaFuncaoRecursivamenteXVezes = (executor, x, arrayInicial) => {
    if (x === 0) return arrayInicial
    return executaUmaFuncaoRecursivamenteXVezes(executor, x - 1, executor(arrayInicial))
}

const executaUmaFuncaoAteGerarUmValorDiferenteNoArray = (executor, arrayBase = []) => {
    const novoElemento = executor()
    if (!arrayBase.includes(novoElemento)) return [...arrayBase, novoElemento]
    return executaUmaFuncaoAteGerarUmValorDiferenteNoArray(executor, arrayBase)
}

const curryfy = (method, ...parametrosFixos) => (...outrosParametros) => method(...parametrosFixos, ...outrosParametros)

// Helpers de sorteio

const sorteioDeZeroAX = (x) => Math.floor(x * Math.random())

const sorteiaXNumerosNaoRepetidosDeNoMaximoMax = (x) => (max) => {
    const executor = () => sorteioDeZeroAX(max)
    const funcaoRecursiva = curryfy(executaUmaFuncaoAteGerarUmValorDiferenteNoArray, executor)
    return executaUmaFuncaoRecursivamenteXVezes(funcaoRecursiva, x, [])
}

const sortearXElementosDeUmArray = (x, array) => {
    const max = array.length
    if (x > max) x = max
    const indices = sorteiaXNumerosNaoRepetidosDeNoMaximoMax(x)(max)
    return indices.map(i => array[i])
}

const sortearXCartas = x => sortearXElementosDeUmArray(x, cartas)

const sorteio = sortearXCartas(2)
console.log(sorteio)