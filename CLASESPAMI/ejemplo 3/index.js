 
 function Avenger (nombre, nombrereal, poder){
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.salud = 100;
    this.poder = poder;

    this.status = function(){
    console.log( this.nombre + "Salud" + this.salud + "Energia: " + this.poder)

 }

 this.curar = function( amigo){
if( this.poder >20){
    amigo.salud +=20;
}


 }

 this.atacar = function( malo ){
     malo.salud -= 20;
 }

 var Iroman = new Avenger("Iroman", "Tony", 1000);

 var Capitan = new Avenger