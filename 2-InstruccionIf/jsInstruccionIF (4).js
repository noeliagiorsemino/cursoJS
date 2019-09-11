function mostrar()
{


var edad; 
edad = document.getElementById("edad").value;
//opcion1
/*
if (edad >= 13 && edad <=17){
    alert ("Es adolescente");
}*/
//opcion2
if ( ! (edad < 13 || edad > 17)){
alert ("Es adolescente");
}

}//FIN DE LA FUNCIÓN