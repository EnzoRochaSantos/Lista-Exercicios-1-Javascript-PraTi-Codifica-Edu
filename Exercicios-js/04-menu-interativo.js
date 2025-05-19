//Exercício 4 -  Crie um menu interativo no console que oferece ao usuário a escolha de três opções.  Utilize switch-case para implementar a lógica de cada opção selecionada

let prompt = require("prompt-sync")();

let opcao = prompt(
  "Escolha uma opção: \n1. Sony\n2. Microsoft\n3. Nintendo\nDigite sua opção: "
);

switch (parseInt(opcao)) {
  case 1:
    console.log("Você escolheu Sony, por isso ganhou um Playstation 5 Pro.");
    break;
  case 2:
    console.log("Você escolheu Microsoft, por isso ganhou um Xbox Series X.");
    break;
  case 3:
    console.log(
      "Você escolheu Nintendo, por isso ganhou um Nintendo Switch 2."
    );
    break;
  default:
    console.log("Opção inválida.");
    break;
}
