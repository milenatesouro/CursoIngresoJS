function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
//al seleccionar un mes informar. si es Febrero: " Este mes no tiene más de 29 días." 
//si NO es Febrero: "Este mes tiene 30 o más días

//alert (mesDelAño);
switch (mesDelAño)
{
    case "Febrero": 
        alert ("Este mes no tiene mas de 29 dias.");
    break;
    default: 
        alert ("Este mes tiene 30 o mas dias.");
    break;
}

	


}//FIN DE LA FUNCIÓN