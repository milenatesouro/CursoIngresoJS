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
			maximo = 10000;
			minimo = 1;
		} else { 
			if (numero>maximo) {
				maximo = numero ;
				resultado = "Ingrese si si quiere continuar."; } 
				if (numero<minimo) {
					minimo = numero;
					resultado = "Ingrese si si quiere continuar.";
				}
			}
		}
		
	
	




}//FIN DE LA FUNCIÓN