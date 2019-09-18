function mostrar()
{

	var contador=0;
  var acumulador = 0;
  var promedio;
  var numero;

  //defino la cantidad de veces que debo iterar, en este caso se que son 5 veces.
  //valor inicial;valor ultimo--> condicion, si es verdadero se ejecuta la accion, sino sale; valor en el que se incrementa
  // las variables que se definin dentro de un bloque, viven mientras el bloque este activo, por eso i se define adentro del for
  //habitualmente se usa la variable y se define para todo pero con let indico donde va a vivir;
  for (var i = 0; i < 5; i++) {    
    numero = parseInt( prompt("Ingrese un numero: "));
        //acumulador = acumulador + numero;
    acumulador += numero;

      }

  // el promedio es una vez sobre la suma , entonces no hace falta iterar

  
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
