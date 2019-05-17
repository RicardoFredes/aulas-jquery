const curryfy = (method, ...parametrosFixos) => (...outrosParametros) => method(...parametrosFixos, ...outrosParametros)
const curryfyRight = (method, ...parametrosFixos) => (...outrosParametros) => method(...outrosParametros, ...parametrosFixos)
const curryfyRecursive = (method, times, ...params) => {
    if(times === 0) return method
    if(times === 1) return a => method(...params, a)
    return a => {
        const newParams = [...params, a]
        return curryfyRecursive(method, times-1, ...newParams)
    }
}






console.log(sortearXCartas(3))
console.log(sortearXCartas(4))
console.log(sortearXCartas(3))





const somaTudo = (a,b,c) => {
    return a+b*c
}




const somaTambem = curryfy(somaTudo)
const somaTambem1 = curryfy(somaTudo, 2)
const somaTambem2 = curryfy(somaTudo, 2, 1)
const somaTambem3 = curryfy(somaTudo, 2, 1, 1)


console.log(somaTudo(2,1,1))
console.log(somaTambem(2,1,1))
console.log(somaTambem1(1, 1))
console.log(somaTambem2(1))
console.log(somaTambem3())









console.log(' ')


const somaInvertidoTambem = curryfyRight(somaTudo)
const somaInvertidoTambem1 = curryfyRight(somaTudo, 1)
const somaInvertidoTambem2 = curryfyRight(somaTudo, 1, 1)
const somaInvertidoTambem3 = curryfyRight(somaTudo, 2, 1, 1)

console.log(somaTudo(2,1,1))
console.log(somaInvertidoTambem(2,1,1))
console.log(somaInvertidoTambem1(2, 1))
console.log(somaInvertidoTambem2(2))
console.log(somaInvertidoTambem3())






console.log(' ')

const somaRecursivoTambem = curryfyRecursive(somaTudo,0, 2, 1, 1)
const somaRecursivoTambem1 = curryfyRecursive(somaTudo,1, 2, 1)
const somaRecursivoTambem2 = curryfyRecursive(somaTudo, 2, 2)
const somaRecursivoTambem3 = curryfyRecursive(somaTudo, 3)

console.log(somaTudo(2,1,1))
console.log(somaRecursivoTambem(2,1,1))
console.log(somaRecursivoTambem1(1))
console.log(somaRecursivoTambem2(1)(1))
console.log(somaRecursivoTambem3(2)(1)(1))


