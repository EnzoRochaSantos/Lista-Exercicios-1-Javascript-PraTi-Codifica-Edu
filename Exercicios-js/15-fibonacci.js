//Exercicio 15 -  Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")();

let numAnterior = 0;
let numAtual = 1;
let numProximo;

console.log(numAnterior);
console.log(numAtual);

for (let i = 0; i < 8; i++) {
  numProximo = numAnterior + numAtual;
  numAnterior = numAtual;
  numAtual = numProximo;
  console.log(numProximo);
}
