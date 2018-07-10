
function mostrar()
{
    var ancho;
    var largo;
    ancho = prompt ("ancho");
    largo = prompt ("largo");
    ancho = parseInt (ancho);
    largo = parseInt (largo);
    var perimetro = (ancho + largo)*2;
    alert (" El perimetro es " + perimetro);

}
