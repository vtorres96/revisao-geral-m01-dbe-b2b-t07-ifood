// Função sem parâmetro
function imprimirOla() {
    console.log("Olá!")
}

// Executando a função imprimirOla
// imprimirOla()

// Diferença entre função com console.log para return
// Note que ao instanciar a função acima `imprimirOla()` conseguimos
// visualizar o resultado no console, pois, o que temos dentro dessa
// função é apenas um console.log, porém, se a função fosse modificada,
// de modo que fosse implementado o return, 
// não conseguiremos ver no console a mensagem, conforme exemplo abaixo:

function imprimirOlaComReturn() {
    return "Olá com return!";
}

// imprimirOlaComReturn()

// Isso ocorre pelo fato de que a função imprimirOlaComReturn() retorna
// a string `Olá com return!`, portanto, devemos aplicar console.log no método,
// ou atribuir o retorno dessa função para uma variável
// e aplicar console.log nessa variável, conforme ilustração abaixo:

// console.log(imprimirOlaComReturn())
// let retornoFuncaoImprimirOla = imprimirOlaComReturn()
// console.log(retornoFuncaoImprimirOla)

// Função com parâmetro
function cumprimentar(pessoa, idade) {
    console.log(`Olá, ${pessoa}! Fiquei sabendo que voce tem ${idade} anos`)
}

// cumprimentar('Victor', 27)

// Entendendo a diferença de function para arrow function

// declaração tradicional (sofre hoisting)
// O que seria o hoisting ?
// Basicamente é um comportamento em JavaScript onde
// declarações de variáveis e funções são movidas para o topo do escopo
// em que estão definidas, durante a fase de compilação.

// No entanto, há uma diferença importante entre a declaração
// de funções usando a palavra-chave function e a utilização
// de arrow functions (=>) quando se trata de hoisting.

// Com funções declaradas usando a palavra-chave function,
// a declaração é movida para o topo do escopo,
// o que significa que você pode chamá-la antes da sua
// declaração no código. Por exemplo:

// console.log(soma(1,2))
// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

// declaração com arrow-function (não sofre hoisting)

// No entanto, no caso das arrow functions,o comportamento é diferente.
// As arrow functions não são completamente hoistadas da mesma maneira
// que as funções declaradas com function. Isso ocorre porque as
// arrow functions são expressões, e não declarações.
// Portanto, elas não são movidas para o topo do escopo da mesma forma
// que as funções declaradas com function

// Isso resultará em erro, pois a arrow function não é hoistada
// console.log(somaArrowFunction(1, 2))
const somaArrowFunction = (x, y) => {
    const resultado = x + y;
    return resultado;
}