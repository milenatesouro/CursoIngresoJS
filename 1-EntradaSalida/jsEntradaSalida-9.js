/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    document.getElementById("resultado").value = resultado;
    sueldo = document.getElementById ("sueldo");
    sueldo = parseInt (sueldo);
    resultado = ( sueldo *1.1 );

}
