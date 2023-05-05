// 1. function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
// função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? aparecia minhaFuncao(...) is not a function
 

// 2. let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade: A utilidade desta função é dizer se
// o usuario utilizou a palavra cenoura no prompt

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` true
//      ii.  `CENOURA é bom pra vista` true
//      iii. `Cenouras crescem na terra` true


// 1. Escreva as funções explicadas abaixo:
    
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas
// informações sobre você, como:

// console.log("Meu nome é mariana, tenho 16 anos, sou estudante e moro em são leopoldo")

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de 
// uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem 
// com o template:

// let nome = prompt("qual o seu nome?")
// let idade = Number(prompt("qual sua idade?"))
// let cidade = prompt("qual sua cidade?")
// let profissao = prompt("qual sua profissão")

// function listaNome(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e minha profissão é ${profissao}.`)
// }

// 2. Escreva as funções explicadas abaixo:
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function numero(num1, num2){
//     return num1 + num2
// }
// num1 = Number(prompt("digite um  numero"))
// num2 = Number(prompt("digite outro  numero"))
// console.log(numero(num1, num2))
    
// 2. b
// function comparaValores(num1, num2){
//     return num1 >= num2
// }
// console.log(comparaValores(prompt("Digite um número"), prompt("Digite outro número")))

// //2. c
// function verificaPar(num){
//     num % 2 == 0
// }
// console.log(verificaPar("Digite um número"))

// //2. d
// function mostraTamanhoMensagemEMaiusculo(msg){
//     console.log(`${msg.length}\n${msg.toUpperCase()}`)
// }
// mostraTamanhoMensagemEMaiusculo(prompt("Escreva uma mensagem"))

// //3

// function fazContas(num1, num2){
//     return console.log(`Números inseridos: ${num1} e ${num2}\nSoma: ${num1 + num2}\nDiferença: ${num1 - num2}\nMultiplicação: ${num1 * num2}\nDivisão: ${num1 / num2}`)
// }
// fazContas(prompt("Digite um número"), prompt("Digite outro número"))

// //Desafio 1. a
// arrow = (a) => {
//     console.log(a)
// }

// //Desafio 1. b
// outraArrow = (num1, num2) => {
//     arrow(num1+num2)
// }

// outraArrow(prompt("Digite um número"), prompt("Digite outro número"))

// //Desafio 2
// function pitagoras(cateto1, cateto2){
//     return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
// }
// console.log(pitagoras(prompt("Digite um número"), prompt("Digite outro número")))