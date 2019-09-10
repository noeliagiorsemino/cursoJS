/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var nuevoSueldo;
    var aumento;

    sueldo = parseInt(document.getElementById("sueldo").value);
    //sueldo = parseFloat(document.getElementById("sueldo").value); en caso que quiera un numero fraccionario

    //aumento = sueldo * 10 / 100;
    aumento = sueldo * 0.1;

    nuevoSueldo = sueldo + aumento;

    document.getElementById("resultado").value = nuevoSueldo;

	
}
