function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.floor((Math.random() * 10) + 1);
	alert (nota);
	if (nota>=9) {
		alert (" Excelente. ");
	} else if (nota>4) {
		alert(" Aprobó. ");
	} else if (nota<4) {
		alert (" Vamos que se puede. ");
	}
}//FIN DE LA FUNCIÓN