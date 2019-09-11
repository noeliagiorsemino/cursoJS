function mostrar()
{
//tomo la edad  



var edad; 

edad = parseInt(document.getElementById("edad").value);

if ( edad < 13) {
    alert("niño");
} 
else if (edad <18) {
    alert("adolescente");
}
else {
    alert("adulto");
}

}//FIN DE LA FUNCIÓN