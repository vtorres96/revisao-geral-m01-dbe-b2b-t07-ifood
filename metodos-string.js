// includes - se o array possui o valor especificado retorna TRUE caso contrário retorna FALSE
// tipo de retorno booleano sempre (true, false)
// Para o caso abaixo retornará TRUE devido Manga ser um item existente dentro do array frutas
const frutas = ["Banana", "Laranja", "Maçã", "Manga", "Manga", "Manga"]
let retornoIncludesManga = frutas.includes("Manga")
// console.log(retornoIncludesManga)

// Para o caso abaixo retornará FALSE devido Pêra não ser um item existente dentro do array frutas
let retornoIncludesPera = frutas.includes("Pêra")
// console.log(retornoIncludesPera)


// indexOf - retorna o primeiro índice (posição) de um valor especificado
// inicia a pesquisa da esquerda para direita
// tipo de retorno numérico, podendo ser positivo caso encontre o índice
// ou negativo (-1) caso não encontre
// retorna -1 quando o valor não é encontrado dentro do array
let retornoIndexOfManga = frutas.indexOf("Manga")
// console.log(retornoIndexOfManga)

let retornoIndexOfPera = frutas.indexOf("Pêra")
// console.log(retornoIndexOfPera)

// lastIndexOf - retorna o último índice (posição) de um valor especificado
// inicia a pesquisa da direita para esquerda
// tipo de retorno numérico, podendo ser positivo caso encontre o índice
// ou negativo (-1) caso não encontre
// retorna -1 quando o valor não é encontrado dentro do array
let retornoLastIndexOfManga = frutas.lastIndexOf("Manga");
// console.log(retornoLastIndexOfManga)

let retornoLastIndexOfPera = frutas.lastIndexOf("Pêra");
// console.log(retornoLastIndexOfPera)

// slice,
// replace,
// trim,
// padStart,
// split