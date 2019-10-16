
window.addEventListener('load', function () {

  let divTabla = document.getElementById('divTabla');

  let tabla = crearTabla(personas);

  divTabla.appendChild(tabla);
})

function crearTabla(arr) {
  let tabla = document.createElement('table');

  let encabezado = document.createElement('tr');

  for (prop in arr[0]) {

    let th = document.createElement('th'); /// creo un elemento th
    th.setAttribute('style', 'background : red');
    /// creo nodo texto let texto = document.createTextNode (prop);
    ////pongo el texto en el th    th.appendChild (texto);
    /// th textContent hace lo mismo que lo otro en un solo paso
    th.textContent = prop;  ////le cargo al th el valor de la propiedad
    encabezado.appendChild(th); //// inyecto el th en el tr

  }

  tabla.appendChild(encabezado);
  //// una vez armado el encabezado armo el cuerpo de la tabla

  for (let i = 0; i < arr.length;  ///con este for reccorro el array de personas
    i++) {

    let fila = document.createElement('tr'); ///para cada persona creo una fila
    for (
      prop in arr[i]) {  ////con este i recorro lo atributoes de la persona

      let celda = document.createElement('td');  ////para cada atributo recorro una celda

      if (i % 2) { celda.setAttribute('style', 'background: rgb(200,200,200)');

      }
      celda.textContent = arr[i][prop]; /// cargo en la celda el valor del atriubuto
      fila.appendChild(celda); ///agrego a la fiula de la celda

    }
    tabla.appendChild(fila);  //// agrego la fila a la tabla







  }

  tabla.setAttribute('border', '1px solid black');
  tabla.setAttribute('style', 'border-collapse: collapse');

  ////tabla.appendChild (encabezado); /// agrego la fila de encabezado a la tabla
  return tabla;

}
///crearTabla (personas);
