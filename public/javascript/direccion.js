function copiarDireccion() {
    //Obtener el texto de la dirección
var direccionTexto = document.getElementById("direccion").textContent;
    //Utilizar la API del portapapeles para copiar el texto
navigator.clipboard.writeText(direccionTexto).then(function() {
    //Mostrar un mensaje de éxito o feedback visual 
    alert("¡Direccion copiada al portapapeles");
    }, function(error) {
        //Mostrar un mensaje de error en caso de fallo
        console.error ('Error al copiar la direccion: ', error);
    });

}



