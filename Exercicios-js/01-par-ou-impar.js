//Exercício 1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

let valor = parseInt(prompt("Digite um número inteiro: "));

if (valor % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
