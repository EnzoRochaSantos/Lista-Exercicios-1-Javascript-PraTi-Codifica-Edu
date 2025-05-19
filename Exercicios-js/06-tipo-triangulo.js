//Exercício 6 -  Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:  Isósceles, escaleno ou eqüilátero
const prompt = require("prompt-sync")();

let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  let tipoTriangulo = "";

  if (ladoA === ladoB && ladoB === ladoC) {
    tipoTriangulo = "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    tipoTriangulo = "Isósceles";
  } else {
    tipoTriangulo = "Escaleno";
  }

  console.log(`Os lados formam um triângulo ${tipoTriangulo}.`);
} else {
  console.log("Os valores fornecidos NÃO formam um triângulo.");
}
