//Construa uma página que leia o saldo de uma aplicação e mostre, em um alert,  o novo saldo, considerado o reajuste de 2%.


var aplicacao = parseInt(prompt('Informe o primeiro valor'));
var reajuste = aplicacao * 0.02;
var saldo = aplicacao + reajuste;


alert('O saldo da aplicação reajustado é: ' +saldo)