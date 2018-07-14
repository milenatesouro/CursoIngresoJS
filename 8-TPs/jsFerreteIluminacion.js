/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var preciounitario = 35;
    var total;
    var preciototal;
    var descuento;
    var impuesto;
    var cantidadlamparas = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
    cantidadlamparas = parseInt (cantidadlamparas);
    preciounitario = parseInt (preciounitario);
    preciototal = parseInt (preciototal);
    total = parseInt (total);
    preciototal = (preciounitario * cantidadlamparas);
    if (cantidadlamparas>=6 && marca=="ArgentinaLuz" ) {
        descuento = 0.5;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==5 && marca=="ArgentinaLuz") {
        descuento = 0.4
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==4 && (marca=="ArgentinaLuz" || marca=="FelipeLamparas")) {
        descuento = 0.25;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==4 && (marca=="JeLuz" || marca=="HazIluminacion" || marca=="Osram" ) ) {
        descuento = 0.2;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==3 && marca=="ArgentinaLuz") {
        descuento = 0.15;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==3 && marca=="FelipeLamparas") {
        descuento = 0.1;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    } else if (cantidadlamparas==3 && (marca=="Jeluz" || marca=="HazIluminacion" || marca=="Osram" )) {
        descuento = 0.05;
        total = (preciototal * descuento);
        document.getElementById("precioDescuento").value = total;
    }  else if (total>120) {
        impuesto = (total * 1.1);
        alert (" Usted pagó " + impuesto + " de IIBB. ");
    }
    
}