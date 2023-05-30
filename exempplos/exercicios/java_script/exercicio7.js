//Elabore um programa que leia um comprimento em polegadas,
//calcule e exiba o comprimento em milímetros,
//considerando que 1 polegada equivale a 25,4 milímetros.
//Mostre o resultado utilizando a função "document.write".
//fiz exemplifiquei o comprimento em centimetros


var comprimento = parseInt(prompt('Informe a o valor do comprimento!'));
var milimetros = comprimento * 10;
var polegadas = milimetros / 25.4;


document.write('O comprimento de '+comprimento+' centimetros em milimetros é de '+milimetros+' convertendo em polegadas temos '+polegadas)