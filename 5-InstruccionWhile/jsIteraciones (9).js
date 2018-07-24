function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;
	var numero;
	while(respuesta=='si') 
	{
		numero = prompt ("Ingrese numeros.");
		resultado = prompt ("Ingrese si si quiere continuar.");
		
		if (bandera) {
			bandera = false;
			maximo = 15;
			minimo = 3;
		} else { 
			if (numero>maximo) {
				maximo = numero ;
				resultado = "Ingrese si para continuar."; } 
				if (numero<minimo) {
					minimo = numero;
					resultado = "Ingrese si para continuar.";
				}
			}
		}
		
	
	




}//FIN DE LA FUNCIÓN