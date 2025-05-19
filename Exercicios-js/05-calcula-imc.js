// Exercício 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e  determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else

const prompt = require("prompt-sync")();

let IMC = 0;
let peso = parseFloat(prompt("Digite o seu peso (em kg): "));
let altura = parseFloat(
  prompt(
    "Digite a sua altura (em metros - utilize ponto(.) para separar os valores): "
  )
);
IMC = peso / (altura * altura);

function colorText(text, colorCode) {
  const validCodes = [30, 31, 32, 33, 34, 35, 36, 37, 41, 91];
  if (!validCodes.includes(colorCode)) {
    console.warn("Código de cor inválido! Usando cor padrão.");
    colorCode = 0;
  }
  return `\x1b[${colorCode}m${text}\x1b[0m`;
}

if (IMC < 18.5) {
  console.log(
    colorText`Seu IMC é ${colorText(
      IMC.toFixed(2),
      34
    )} e você está abaixo do peso.`
  );
} else if (IMC >= 18.5 && IMC < 24.9) {
  console.log(
    `Seu IMC é ${colorText(IMC.toFixed(2), 32)} e você está com o peso normal.`
  );
} else if (IMC >= 25 && IMC < 29.9) {
  console.log(
    `Seu IMC é ${colorText(IMC.toFixed(2), 33)} e você está com sobrepeso.`
  );
} else if (IMC >= 30 && IMC < 34.9) {
  console.log(
    `Seu IMC é ${colorText(
      IMC.toFixed(2),
      31
    )} e você está com obesidade grau 1.`
  );
} else if (IMC >= 35 && IMC < 39.9) {
  console.log(
    `Seu IMC é ${colorText(
      IMC.toFixed(2),
      91
    )}. e você está com obesidade grau 2.`
  ); //como eu posso deixar o valor do imc colorido ?
} else if (IMC >= 40) {
  console.log(
    `Seu IMC é ${colorText(
      IMC.toFixed(2),
      41
    )} e você está com obesidade grau 3.`
  );
} else {
  console.log("Valor inserido é inválido !");
}
