// Exercicio 14 -  Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let numFatorial = parseInt(
  prompt("Digite um número inteiro para calcular o fatorial: ")
);

let fatorial = 1;

for (let i = 1; i <= numFatorial; i++) {
  fatorial *= i;
  console.log(`O fatorial de ${i} é: ${fatorial}`);
}
