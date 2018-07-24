function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while (respuesta == "si") {
		contador++;
		numero = prompt ("Ingrese la cantidad de números deseados.");
		numero = parseInt (numero);
		
		if (numero>0) {
			positivo = positivo + numero; 
			resultado = prompt ("Ingrese si para seguir ingresando números.");
		} else if (numero<1) {
			negativo = negativo * numero; 
			resultado = prompt ("Ingrese si para seguir ingresando números.");
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN