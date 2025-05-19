// Exercicio 11 -  Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require("prompt-sync")();

let somaTotal = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número: `)); // Solicita o número
  somaTotal += numero; // Adiciona o número à soma total
}

console.log(`A soma total dos números digitados é: ${somaTotal}`);
