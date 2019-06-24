console.log("Cargar el Script 1");

function cargascript (src, callback) {
  let archivo = document.createElement ("script");
  archivo.scr = src;
  archivo.onload = function(){
    callback();  
  };

  document.head.append(archivo);

}

cargascript ("./Callback-script2.js", function() {
  console.log ("Callback del script 2");
  saludar ();

} );






