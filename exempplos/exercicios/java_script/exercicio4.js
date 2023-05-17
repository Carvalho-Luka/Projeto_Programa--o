//Elabore um programa em JavaScript que receba um valor em minutos e converta num formato com dias,
// horas e minutos. Mostre o resultado na tela com a função "document.write".

var valorDigitado = parseInt(prompt('Informe a quantidade de minutos!'));
var dia = Math.floor(valorDigitado / 1440);
var sobraMinutos = valorDigitado % 1440;
var hora = Math.floor(sobraMinutos / 60)
var minutos = sobraMinutos % 60;


document.write(valorDigitado+ ' em minutos equivalem a ' +dia+ ' dia e ' +hora+ ' horas e '+minutos+' minutos')