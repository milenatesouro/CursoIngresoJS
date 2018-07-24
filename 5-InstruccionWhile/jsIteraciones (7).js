function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma=0;
	var respuesta='si';
	var numero;

	while (respuesta=="si") {
		contador++;
		numero = prompt ("Ingrese la cantidad de números deseados.");
		numero = parseInt (numero);
		acumulador = suma + numero ;
		promedio = suma / contador ;
		respuesta = prompt ("Ingrese si para continuar.");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN