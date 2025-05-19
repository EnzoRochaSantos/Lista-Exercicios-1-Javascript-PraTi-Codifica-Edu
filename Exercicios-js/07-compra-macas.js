//Exercício 7 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25seforem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let priceLowerTwelve = 0.3;
let priceUpperTwelve = 0.25;

let macasCompradas = parseInt(prompt("Quantas maçãs você comprou ? "));
let valorTotal = 0;

if (macasCompradas < 12) {
  valorTotal = macasCompradas * priceLowerTwelve;
  console.log(
    `O valor total da sua compra de maças é:  R$ ${valorTotal.toFixed(2)}`
  );
} else if (macasCompradas >= 12) {
  valorTotal = macasCompradas * priceUpperTwelve;
  console.log(
    `O valor total da sua compra de maças é:  R$ ${valorTotal.toFixed(2)}`
  );
}
