//Escrever um código JavaScript que receba uma quantidade de segundos e 
//converta em minutos e segundos. Por exemplo, 252 segundos equivalem a 4 minutos e 12 segundos.

var segundos = parseInt(prompt('Informe a quantidade de segundos!'));
var minutos = Math.floor(segundos / 60);
var sobra = segundos % 60;



alert(segundos+ ' segundos equivalem a ' +minutos+ ' minutos e ' +sobra+ ' segundos' )
