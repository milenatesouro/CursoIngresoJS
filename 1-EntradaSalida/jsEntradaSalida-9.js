/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()   {
    var sueldo;
    var aumento;
    var sueldoconaumento;
    sueldo = documeto.getElementById("sueldo").value;
    sueldo = parseInt (sueldo);
    aumento = sueldo * 1.1;
    sueldoconaumento = sueldo + aumento;
    documento.getElementById("resultado").value = sueldoconaumento;
    
}
