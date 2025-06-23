// console.log("Hello World")
// console.log('Hello World')
// console.log(`Jaques`)

// console.log(typeof("banana"))
// console.log(typeof(90))

// console.log(90)
// console.log(typeof("90"), 1000, 'Goku')

// let name = 'jaques'
// console.log(name)

// var AnotherName= 'Hyago'
// console.log(AnotherName)

// const CITY= "Canoas"
// console.log(CITY)



// CALCULADORA SIMPLES
// function somar(a, b){
//     return a + b;
// }

// function subtrair(a, b){
//     return a - b;
// }

// function multiplicar(a, b){
//     return a * b;
// }

// function dividir(a, b){
//     if(b===0){
//         return'erro: divisão por zero';
//     }
//     return a/b;
// }

// console.log("soma: " + somar (5,3));
// console.log("Subtração: " + subtrair(5, 3));
// console.log("Multiplicação: " + multiplicar(5, 3));
// console.log("Divisão: " + dividir(5, 3));

// const prompt = require('prompt-sync')()

// let valor1 = Number (prompt("Insira o Primeiro Valor : "))
// let valor2 = Number (prompt("Insira o Segundo Valor : "))
// let op = prompt('informe a operação desejada: (+, -, /, *): ')
// let resultado = 0

// if(op === '+'){
//     resultado = valor1 + valor2
// } else if(op === '-'){
//     resultado = valor1 - valor2
// } else if(op === '/'){
//     if(valor2 !== 0){
//         resultado = valor1/valor2
//     } else {
//         console.log('Erro: divisão por 0')
//         resultado = undefined
//     }
// } else if(op === '*'){
//     resultado = valor1 * valor2
// } else{
//     console.log('operação inváçida')
//     resultado = undefined
// }

// if(resultado !== undefined){
//     console.log("Resultado: ", resultado)
// }


//TABUADA SIMPLES

// let numero= 3
// let i= 1
// while (i <=10){
//     console.log (`${numero} X ${i} = ${numero*i} `)
// i++
// }

//TABUADA COM USUÁRIO

// const prompt = require(`prompt-sync`)()

// let numeroTabuada = Number (prompt(`Qual o número?`))

// let contadora = 1

// while(contadora <= 10){
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada*contadora}`)
//     contadora++
// }

//CONTAGEM REGRESSIVA

// let contagem = 10
// while(contagem >= 0){
//     console.log( contagem)
//     contagem--
// }

// const prompt = require(`prompt-sync`)()

// let contador = -1
// let soma= 0
// let resposta = null
// while(resposta!=0){
//      resposta =  Number(prompt('informe as médias:'))
//      soma += resposta
//      contador++
// }

// let mediaFinal = soma/contador
// console.log(`A média Final é: ${mediaFinal}`)


//CELSIOS EM FAJRENHEIT

// const prompt = require('prompt-sync')();

// let resposta = null;

// while (resposta !== 0) {
//      resposta = Number(prompt('Informe a temperatura em Celsius (0 para sair): '));

//      if (resposta !== 0) {
//           let fahrenheit = resposta * 1.8 + 32;
//           console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);
//      }
// }


//CALCULO DE ELEITORES

// const prompt = require('prompt-sync')();

// let totalEleitores = Number (prompt("Informe o numero de eleitores:"))
// let totalBrancos = Number (prompt("Informe o numero de votos brancos :"))
// let totalNulo = Number (prompt("Informe o numero de votos nulos :"))
// let totalvalidos = Number (prompt("Informe o numero de votos válidos :"))

// console.log('O percentual de votos em branco é:' ,  (totalBrancos/totalEleitores)*100)
// console.log('O percentual de votos nulos é:' ,  (totalNulo/totalEleitores)*100)
// console.log('O percentual de votos válidos é:' ,  (totalvalidos/totalEleitores)*100)

//CALCULO ALUNOS

const prompt = require('prompt-sync')()

let alunosC = Number(prompt("Informe a quantidade de alunos da turma C:"));
let alunosD = Number(prompt("Informe a quantidade de alunos da turma D:"));
let alunosReprovadosC = Number(prompt("Informe a quantidade de alunos reprovados da turma C:"));
let alunosReprovadosD = Number(prompt("Informe a quantidade de alunos reprovados da turma D:"));

if (alunosReprovadosC <= alunosC && alunosReprovadosD <= alunosD) {
  console.log("Percentual de alunos reprovados é:", ((alunosReprovadosC + alunosReprovadosD) / (alunosC + alunosD)) * 100, "%");
} else {
  console.log("Erro: A quantidade de reprovados não pode ser maior que o total de alunos na turma.");
}1

