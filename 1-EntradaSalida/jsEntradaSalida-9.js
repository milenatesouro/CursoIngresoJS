/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()   {
    var sueldo;
    var aumento;
    var resultado;
    sueldo = documento.getElementById("sueldo").value;
    sueldo = parseInt (sueldo);
    aumento = sueldo * 1.1;
    resultado = sueldo + aumento;
    documento.getElementById("resultado").value = sueldoconaumento;
}
