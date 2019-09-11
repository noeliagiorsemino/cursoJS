function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){
    case "Enero":
    alert("verano");
    break;
    case "Marzo":
    alert("A cleases");
    break;
    case "Julio":
    alert("se vienen las vacaciones");
    break;
    case "Diciembre":
    alert("Felices Fiestas");
    break;
    default:
    alert("Default");
    
}

/*para no repetir alert
        case "Enero":
        case "Marzo":
        alert("verano");
        Break*/




}//FIN DE LA FUNCIÓN