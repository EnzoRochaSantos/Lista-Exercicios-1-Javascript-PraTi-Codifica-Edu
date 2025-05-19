// Exercício 3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite a nota (0 a 10): "));

if (nota >= 6 && nota <= 10) {
  console.log("Você está Aprovado !");
} else if (nota >= 4 && nota < 6) {
  console.log("Você está de Recuperação !");
} else if (nota >= 0 && nota < 4) {
  console.log("Você está Reprovado !");
} else {
  console.log("Nota inserida é Inválida !");
}
