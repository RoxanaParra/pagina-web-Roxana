// Inicializar el mapa centrado en la ubicación del negocio
var map = L.map('map').setView([40.416775, -3.703790], 13); // Coordenadas de Madrid, por ejemplo

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© Roxana Parra'
}).addTo(map);

// Añadir un marcador para la ubicación de la empresa
var marker = L.marker([40.416775, -3.703790]).addTo(map)
    .bindPopup('Crea tus Momentos')
    .openPopup();

// Variable para guardar la referencia de la ruta y el marcador del cliente
var rutaActual = null;
var marcadorCliente = null;

// Función para calcular la ruta (utilizando geocodificación)
function calcularRuta() {
    var ubicacionCliente = document.getElementById('ubicacionCliente').value;

    // Geocodificación para convertir la dirección en coordenadas
    var geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(ubicacionCliente, function(results) {
        if (results.length > 0) {
            var clienteCoordenadas = results[0].center;

            //Si ya existe un marcador del cliente, eliminarlo antes de crear uno nuevo

            if (marcadorCliente) {
                marcadorCliente.remove ();
            }

            // Añadir un marcador en la ubicación del cliente

            marcadorCliente = L.marker(clienteCoordenadas).addTo(map)
                .bindPopup('Tu ubicación: ' + ubicacionCliente)
                .openPopup();

            // Si ya hay una ruta dibujada, eliminarla
            if (rutaActual) {
                rutaActual.remove();
            }

            // Dibujar una nueva línea entre la ubicación del negocio y la del cliente
            rutaActual = L.polyline([marker.getLatLng(), clienteCoordenadas], { color: 'blue' }).addTo(map);

            // Ajustar el zoom para ver ambas ubicaciones
            map.fitBounds(rutaActual.getBounds());
        } else {
            alert('No se pudo encontrar la ubicación');
        }
    });
}

function limpiarRuta() { 
    // Limpia el campo de entrada del cliente
    document.getElementById('ubicacionCliente').value = '';

    //Eliminar rutas que existan en el mapa
    if (rutaActual) {
        rutaActual.remove(); // Eliminar la ruta del mapa correctamente
        rutaActual = null; // Reiniciar la variable
     }

     //Eliminar el PopUp
    if (marcadorCliente) {
        marcadorCliente.remove(); //Eliminar el marcador del cliente y el PopUp
        marcadorCliente = null; //Se reinicia la variable 
    } else {
        alert('No hay ruta para limpiar');
    }
}
