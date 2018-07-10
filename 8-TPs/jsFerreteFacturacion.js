/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    var precioUno;
	var precioDos;
	var precioTres;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	var resultado=(precioUno+precioDos+precioTres);
	alert(resultado);
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
    resultado = (preciouno * preciodos * preciotres)/3;
    alert (resultado);
	
}
function PrecioFinal () 
{
     var preciouno;
    var preciodos;
    var preciotres;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    var preciofinal =(preciouno + preciodos + preciotres);
    var iva =(preciofinal*1.21);
    var resultado = (preciofinal + iva);
    alert (resultado);
	
}