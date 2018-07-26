function mostrar()
{
//tomo la edad
//Enunciado:
//al seleccionar un mes informar. 
//si estamos en Invierno: "Abrigate que hace frio." 
//si aún no llego el Invierno: "Falta para el invierno." 
//si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
//ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.  

var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Junio":
        alert ("Abrigate que hace frío.");
    break; 
    case "Julio": 
        alert ("Abrigate que hace frío.");
    break;
    case "Agosto":
        alert ("Abrigate que hace frío.");
    break;
    case "Septiembre":
        alert ("Ya pasamos el frío, ahora calor!!");
    break;
    default:
        alert ("Falta para el invierno.");
    break;
}




}//FIN DE LA FUNCIÓN