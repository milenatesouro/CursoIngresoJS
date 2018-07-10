function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if (edad>21) {
        alert ("No sos adolescente.");
    }
}//FIN DE LA FUNCIÓN