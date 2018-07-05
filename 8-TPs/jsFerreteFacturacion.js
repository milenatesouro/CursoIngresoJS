/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = preciouno + preciodos + preciotres ;
    alert (resultado);
	
}
function Promedio () 
{
     var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = preciouno * preciodos * preciotres;
    alert (resultado);
	
}
function PrecioFinal () 
{
     var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    resultado = ( preciouno *1.21 ) + (preciodos *1.21) + (preciotres *1.21);
    alert (resultado);
	
}