
window.addEventListener("load", function(){

//var frm = document.getElemetById("frmPersona")

//var frm = document.getElementsByIdTagName("form")[0];

  var frm = document.forms[0];

  frm.addEventListener("submit", manejarSubmit);
  
  
});

function manejarSubmit(e){

    e.preventDefault(
        );

        alert ("capture el evento submit");
}