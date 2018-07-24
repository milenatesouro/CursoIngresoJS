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
		
		if (bandera) {
			bandera = false;
			maximo = 15;
			minimo = 3;
		} else { 
			if (numero>maximo) {
				maximo = numero ; 
				if (numero<minimo) {
					minimo = numero;
				}
			}
		}
		
	
	}




}//FIN DE LA FUNCIÓN