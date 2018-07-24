function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var contadornegativo=0;
	var acumuladonegativo=0;
	var contadorpositivo=0;
	var acumuladopositivo;
	var cantidadceros;
	var contadorpares;
	var promediopositivo;
	var promedionegativo;
	var diferencia;
	var mensaje;


	while(respuesta!="no")
	{	numero = prompt ("Ingrese numero");
		numero = parseInt (numero);
		while (IsNan(numero)) {
			numero = prompt ("Ingrese numero");
			numero = parseInt (numero);
		} if (numero<0) {
			contadornegativo++; 
			acumuladonegativo+= numero ;
		} else if (numero>0) {
			contadorpositivo++;
			acumuladopositivo++;
		} else {
			contadorceros++;
		}
		if (numero/2==1) {
			contadorpares++;
		} 
		
		promedio = acumuladopositivo / contadorpositivo;

	}




}//FIN DE LA FUNCIÓN