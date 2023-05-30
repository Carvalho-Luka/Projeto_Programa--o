//Elabore um programa em JavaScript para receber uma quantidade de horas e uma quantidade de minutos e converter apenas em minutos.
// Mostre o resultado utilizando a função "document.write".


var valorDigitadoH = parseInt(prompt('Informe a quantidade de horas!'));
var valorDigitadoM = parseInt(prompt('Informe a quantidade de minutos!'));
var horaMinuto = 60 * valorDigitadoH;
var minutos = horaMinuto + valorDigitadoM;



document.write('O valor de '+valorDigitadoH+ ' horas e ' +valorDigitadoM+ ' minutos equivale a total de ' +minutos+ ' minutos!')