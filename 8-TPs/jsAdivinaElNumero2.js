/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var intentos = 0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = math.floor((Math.random()*100)+1);
	alert (numeroSecreto);
}

function verificar()
{
	numeroIngresado = document.getElementById("numero").value;
	intentos++;
	document.getElementById("intentos").value = intentos; 
	if (numeroIngresado == numeroSecreto && intentos == 1) {
		alert (" usted es un psiquico ");
	} else if (numeroIngresado == numeroSecreto && intentos == 2) {
		alert (" excelente percepcion ");
	} else if (numeroIngresado == numeroSecreto && intentos == 3) {
		alert (" esto es suerte ");
	} else if (numeroIngresado == numeroSecreto && intentos == 4) {
		alert (" excelente tecnica ");
	} else if (numeroIngresado == numeroSecreto && intentos == 5) {
		alert (" usted está en la media ");
	} else if (numeroIngresado == numeroSecreto && ( intentos > 5 && intentos < 10 )) {
		alert ("falta tecnica");
	} else if (numeroIngresado == numeroSecreto && (intentos >9 )) {
		alert ("afortunado en el amor!!");
	}
	
	

}