// Metodos de arrays
// indexOf
// includes
// reverse
// join
// concat
// slice
// splice

// Métodos de array 2
// every - retornar verdadeiro TRUE caso todos elementos existentes dentro do array satisfaçam
// a condição que estiver aplicada na nossa função callback
// Quando um único elemento não satisfaz a condição aplicada na função callback, retornará FALSE
const idadesMaiores = [32, 33, 19, 40];
const idadesMaioresMenores = [20, 23, 25, 17];
// maneira semelhante de aplicar a função callback diretamente como parâmetro dentro do método
// let retornoEvery = idadesMaiores.every(function (idade) {
//     return idade > 18;
// })

function verificaIdade(idade) {
    return idade > 18;
}
// deve retornar true
let retornoEveryMaiores = idadesMaiores.every(verificaIdade)
// console.log(retornoEveryMaiores)

// deve retornar false
let retornoEveryMenores = idadesMaioresMenores.every(verificaIdade)
// console.log(retornoEveryMenores)


// some - retornar verdadeiro TRUE caso um elemento existentes dentro do array satisfaçm
// a condição que estiver aplicada na nossa função callback
// Quando nenhum elemento satisfaz a condição aplicada na função callback, retornará FALSE

const idadesMenoresComUmaIdadeMaior = [15,16,17,20];
const idadesMenores = [15,16,17,10];

// deve retornar true
let retornoSomeMaiores = idadesMenoresComUmaIdadeMaior.some(verificaIdade);
// console.log(retornoSomeMaiores)

// deve retornar false
let retornoSomeMenores = idadesMenores.some(verificaIdade);
// console.log(retornoSomeMenores)

// find
// findIndex

// filter - filtra elementos que satisfaçam a condição aplicada na função callback
// criando um novo array
// devemos filtrar os elementos contidos no array idadesMaioresMenores que sejam maiores que 18
let maioresDeIdadeFiltrados = idadesMaioresMenores.filter(verificaIdade);
// console.log(maioresDeIdadeFiltrados);

// map - O método map é usado para criar um novo array
// Ele percorre cada elemento do array original e aplica uma função a esse elemento,
// retornando um novo array com os resultados.
const numeros = [1, 2, 3, 4, 5];
function multiplicaAoQuadrado(numero) {
    return numero * numero
}

const numerosAoQuadrado = numeros.map(multiplicaAoQuadrado);
// console.log(numerosAoQuadrado)

// sort

// reduce - executa uma função "redutora" que geralmente é nossa função callback.
// E possui como propósito retornar um único valor, que podemos imaginar que será o resultado
// que foi acumulado durante a execução do reduce com a função callback aplicada.
// O tipo de retorno é um único valor e não um Array, diferente de filter/map
function acumulaValores(acumulador, numero) {
    // console.log(`acumulador: ${acumulador}`)
    // console.log(`número: ${numero}`)
    return acumulador + numero
}
const somaDosNumeros = numerosAoQuadrado.reduce(acumulaValores)
console.log(somaDosNumeros)