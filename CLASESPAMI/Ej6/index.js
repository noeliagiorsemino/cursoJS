//let div = document.getElementsByTagName('div');

let div = document.getElementById("miDiv");

let hijos = div.childNodes;

let primerHijo = div.children;

//hijos[1].style.backgroundColor = "red";

let p1 = document.getElementById("p1");
//console.log(p1);
let padre = p1.parentNode;

console.log(padre);

//let titulo = document.getElementById('titulo'); es lo mismo que esta a continuacion

let titulo = document.getElementsByTagName("h1")[0];

//console.log(titulo);

let hermano = titulo.nextElementSibling;

console.log(hermano);
