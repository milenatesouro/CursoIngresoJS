/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
	var ancho;
	var radio;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	var rectangulo=(largo*ancho)*3;
	alert(rectangulo);



}
function Circulo () 
{
    var largo;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	var diametro=(radio*2);
	var circulo=(3.14*radio*diametro)*3;
	alert(circulo);
	
}
function Materiales () 
{
    var largo;
	var ancho;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	var cemento=(largo*ancho)*2;
	var cal=(largo*ancho)*3;
	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

	
}