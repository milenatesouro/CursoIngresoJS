/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;
var eleccionPersona;


function comenzar()
{
     numeroSecreto = Math.floor((Math.random() * 3) + 1) ;
     switch (numero) {
     case 1: 
     eleccionMaquina = "piedra";  
     break;
     case 2:
     eleccionMaquina = "papel";
     break;
     case 3:
     eleccionMaquina = "tijera";
     break;
         
     }
}//FIN DE LA FUNCIÓN
function piedra()
{
    alert (" La maquina eligió " + eleccionMaquina);
    eleccionPersona = "piedra" ;
    if (eleccionMaquina == eleccionPersona) {
        alert ("empató");
    } else if (eleccionMaquina == tijera) {
        alert ("ganó");
    } else if (eleccionMaquina == papel) {
        alert ("perdió");
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{
    alert (" La maquina eligió " + eleccionMaquina);
    eleccionPersona = "papel";
    if (eleccionMaquina == eleccionPersona) {
        alert ("empató");
    } else if (eleccionMaquina == piedra) {
        alert ("ganó");
    } else if (eleccionMaquina == tijera) {
        alert ("perdió");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    alert (" La maquina eligió " + eleccionMaquina );
    eleccionPersona = "tijera";
    if (eleccionMaquina == eleccionPersona) {
        alert ("empató");
    } else if (eleccionMaquina == papel) {
        alert ("ganó");
    } else if (eleccionMaquina == piedra) {
        alert ("perdió");
    }
}//FIN DE LA FUNCIÓN