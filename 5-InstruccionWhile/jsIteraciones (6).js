function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var suma=0;

	while (contador<5)	{
		contador++;
		numero = prompt ("Ingrese 5 números.");
		numero = parseInt (numero);
		acumulador = acumulador + numero ;
		promedio = suma / contador ;
	}
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN