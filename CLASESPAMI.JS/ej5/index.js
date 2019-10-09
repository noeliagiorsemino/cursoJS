let listaPersonas = [];

function Persona(
  nombre,
  apellido,
  edad,
  genero,
  maneja,
  nada,
  bicicleta,
  pais
) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.nada = nada;
  this.maneja = maneja;
  this.bicicleta = bicicleta;
  this.pais = pais;

  Persona.prototype.Saludar = function() {
    console.log(
      " Hola, soy " + this.nombre + "" + this.apellido + " y tengo " + this.edad
    );
  };
}

window.addEventListener("load", function() {
  var frm = document.forms[0];

  frm.addEventListener("submit", manejarSubmit);
});

function manejarSubmit(e) {
  e.preventDefault();

  let nuevaPersona = traerPersona();
  listaPersonas.push(nuevaPersona);
  cargarFormulario(nuevaPersona);
  limpiarFormulario();


function cargarFormulario(persona) {
  document.getElementById("txtNombre2").value = persona.nombre;
  document.getElementById("txtApellido2").value = persona.apellido;
  document.getElementById("txtEdad2").value = persona.edad;
  if (nuevaPersona.genero == "masculino") {
    document.getElementById("rdoMasculino2").checked = true;
  } else {
    document.getElementById("rdoFemenino2").checked = true;
  }
  document.getElementById("chkNada2").checked = persona.nada;
  document.getElementById("chkbicicleta2").checked = persona.bicicleta;
  document.getElementById("chkManeja2").checked = persona.maneja;
  document.getElementById("selPais2").value = persona.pais;
}



  function traerPersona ()
  {

  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let edad = document.getElementById("txtEdad").value;
  let genero;
  if (document.getElementById("rdoMasculino").checked == true) {
    genero = "masculino";
  } else {
    genero = "femenino";
  }
  let nada = document.getElementById("chkManeja").checked;
  let bicicleta = document.getElementById("chkbicicleta").checked;
  let maneja = document.getElementById("chkManeja").checked;
  let pais = document.getElementById("selPais").value;
  let nuevaPersona = new Persona (
    nombre,
    apellido,
    edad,
    genero,
    maneja,
    nada,
    bicicleta,
    pais
  );

  return nuevaPersona;

}

function limpiarFormulario() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApellido").value = "";
  document.getElementById("txtEdad").value = "";

  document.getElementById("rdoMasculino").checked = false;

  document.getElementById("chkNada").checked = false;
  document.getElementById("chkbicicleta").checked = false;
  document.getElementById("chkManeja").checked = false;
  document.getElementById("selPais").value = "ar";
}
}
