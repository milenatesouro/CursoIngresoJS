function mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;
    edad = document.getElementById(edad).value;
    estadocivil = document.getElementById(estadoCivil).value;
    edad = parseInt (edad);
    if (edad>17 && estadocivil=="soltero") {
        alert ("Es soltero y no es menor.");
    }
}//FIN DE LA FUNCIÓN