function mostrar()
{
    var precio;
    var porcentajedescuento;
    precio = prompt ("precio");
    porcentajedescuento = prompt ("porcentaje de descuento");
    precio = parseInt (precio);
    porcentajedescuento = parseInt (porcentajedescuento);
    var descuento = (precio * porcentajedescuento)/100;
    var resultado = (precio - descuento);
    document.getElementById("elPrecioFinal").value = resultado;

}
