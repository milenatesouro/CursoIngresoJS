function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if (edad>=18) {
        alert ("sos mayor de edad.");
    } else {
        alert ("sos menor de edad.");
    }
}//FIN DE LA FUNCIÓN