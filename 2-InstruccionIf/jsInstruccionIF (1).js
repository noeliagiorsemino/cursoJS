function mostrar()
{
//tomo la edad  

//miro id : edad
var edad; //edad variable, distinto que el id

edad = document.getElementById("edad").value;
console.log (typeof edad);
if(edad == 15) 
{
    alert ("niña bonita");
}

/*edad = parseInt(edad);
if(edad === 15) 
o al reves
if(edad === "15") 
*/


// en caso en que quiera comparar tipo de datos y valor, utilizo === ahi debo convertit

}//FIN DE LA FUNCIÓN