// Exercicio 13 -  Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

while (true) {
  let numero = parseFloat(
    prompt("Digite um número decimal (ou 0 para sair): ")
  );
  if (numero === 0) {
    break;
  }
  soma += numero;
  contador++;
}

if (contador > 0) {
  let media = soma / contador;
  console.log(
    `A média aritmética dos números digitados é: ${media.toFixed(2)}`
  );
} else {
  console.log("Nenhum número válido foi inserido !");
}
