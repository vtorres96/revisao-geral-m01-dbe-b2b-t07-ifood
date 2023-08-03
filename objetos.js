// Estrutura do objeto
// Relembraremos que a estrutura de um objeto consiste em iniciar/fechar
// por chaves '{}', e teremos atribuídos a esse objeto, proprieades, que
// terão valores atribuídos. Conforme ilustração abaixo:

// Note que temos um objeto atribuído para a variável pessoa
// e que esse objeto possui cinco propriedades sendo elas: nome, sobrenome, email, altura e senha
let pessoa = {
    nome: 'Victor',
    sobrenome: 'Torres',
    email: 'victor.torres@cubos.academy.com',
    altura: 1.78,
    senha: '12345',
}

let pessoas = [
    {
        nome: 'Victor',
        sobrenome: 'Torres',
        email: 'victor.torres@cubos.academy.com',
        altura: 1.78,
        senha: '12345',
    },
    {
        nome: 'Felipe',
        sobrenome: 'Silva',
        email: 'felipe.silva@cubos.academy.com',
        altura: 1.78,
        senha: '12345',
    }
]
// Array -> ÍNDICE
// Objeto -> Propriedade 
// Array de Objetos 

// Quando quisermos obter um objeto específico e soubermos o índice em que esse objeto
// se encontra dentro do array, basta passar o índice e depois a propriedade desejada.
// Suponhamos que necessitamos obter o nome que está dentro do objeto no índice 1, como faremos:

console.log(pessoas[1].nome)

// Desestruturação do objeto
// Podemos utilizar da funcionalidade de desestruturação para obter apenas
// algumas propriedades desejadas dentro de um objeto que pode possuir N propriedades,
// supondo que necessitamos obter da pessoa apenas nome e sobrenome para exibir em um console.log()

// Podemos fazer desta maneira, conforme ilustrado abaixo:
let nomePessoa = pessoa.nome
let sobrenomePessoa = pessoa.sobrenome
// console.log(`${nomePessoa} - ${sobrenomePessoa}`)

// E com desestruturação temos:
let { nome, sobrenome } = pessoa
// console.log(`${nome} - ${sobrenome}`)

// Necessitamos adicionar duas propriedades dentro do objeto pessoa, que são:
// idade e profissão
pessoa.idade = 27
pessoa.profissao = 'Desenvolvedor/Professor'

// console.log(pessoa)

// Spread Operator
// O critério do Spread seria de "espalhar" o conteúdo do nosso objeto,
// melhor dizendo podemos utilizar o spread quando temos necessidade de
// unir objetos, como por exemplo, imagine que precisamos unir dados do
// objeto pessoa e deste objeto que está sendo criado endereco em um único objeto

let endereco = {
    rua: '25 de março',
    bairro: 'Centro',
    numero: 1000,
}

// Podemos "espalhar" apenas o conteúdo desses dois objetos atribuíndo-os para uma nova variável
let pessoaEndereco = {
    ...pessoa,
    ...endereco
}

console.log(pessoaEndereco)

// Agora vamos imaginar que precisamos remover a senha do objeto pessoa
// e atribuir o restante das propriedades a uma nova variável
// vamos analisar como podemos fazer isso com spread operator ?

let { senha, ...pessoaSemSenha } = pessoa

// console.log(pessoaSemSenha)