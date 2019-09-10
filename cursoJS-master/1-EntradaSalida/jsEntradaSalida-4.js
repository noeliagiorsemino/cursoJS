/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'gettElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre=prompt("Su nombre");

	document.getElementById("elNombre").value= nombre;


	

}

