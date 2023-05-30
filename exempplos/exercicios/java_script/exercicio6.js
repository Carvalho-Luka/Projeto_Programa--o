//Escreva um programa em JavaScript para calcular e exibir o comprimento de uma circunferência, sendo dada o valor de seu raio. C = 2πR.
//Pode-se utilizar a função Math.PI para obter o valor de PI

var ValorRaio = parseInt(prompt('Informe a o valor do raio!'));
var circunferencia = Math.PI * ValorRaio;

document.write('O valor desta circunferencia é: ' +circunferencia)