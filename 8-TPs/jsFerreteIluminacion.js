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
        var cantidad = document.getElementById("Cantidad").value;
        cantidad = parseInt (cantidad);
        var preciodescuento;
        document.getElementById("precioDescuento").value = preciodescuento;
        var marca = document.getElementById("Marca").value;
            if (cantidad>=6 && marca=="ArgentinaLuz")    {
            preciodescuento = (35 * cantidad) * 1.5; 
            }       else {
            if (cantidad==5 && marca=="ArgentinaLuz") {
            preciodescuento = (35 * cantidad ) *1.4;
        }   else {
            if (cantidad==5 && (marca=="FelipeLamparas" || marca=="JeLuz" || marca=="HazIluminacion" || marca=="Osram"))    {
                preciodescuento = (35 * cantidad ) *1.3;
            }       else    {
                if (cantidad == 4 & (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))   {
                    preciodescuento = (35 * cantidad ) * 1.25;
                } else {
                    if (cantidad==4 && (marca == "JeLuz" || marca == "HazIluminacion" || marca = "Osram")) {
                        preciodescuento = (35 * cantidad ) * 1.2;
                    } else  {
                        if (cantidad == 3 && marca == "ArgentinaLuz") {
                            preciodescuento = ( 3 * precio) *1.15;
                        }   else {
                            if (cantidad == 3 && marca == "FelipeLamparas") {
                                preciodescuento = ( 3* precio) *1.1;
                            }   else {
                                if (cantidad == 3 & (marca == "JeLuz" || marca == "HazIluminacion" || marca == "Osram"))    {
                                    preciodescuento = ( 3 * precio ) * 1.05;
                                }   else {
                                    if ( preciodescuento > 120) {
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
