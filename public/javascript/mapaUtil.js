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

// Función para calcular la ruta (utilizando geocodificación)
function calcularRuta() {
    var ubicacionCliente = document.getElementById('ubicacionCliente').value;

    // Geocodificación para convertir la dirección en coordenadas
    var geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(ubicacionCliente, function(results) {
        if (results.length > 0) {
            var clienteCoordenadas = results[0].center;

            // Añadir un marcador en la ubicación del cliente
            L.marker(clienteCoordenadas).addTo(map)
                .bindPopup('Tu ubicación: ' + ubicacionCliente)
                .openPopup();

            // Dibujar una línea entre la ubicación del negocio y la del cliente
            var ruta = L.polyline([marker.getLatLng(), clienteCoordenadas], { color: 'blue' }).addTo(map);

            // Ajustar el zoom para ver ambas ubicaciones
            map.fitBounds(ruta.getBounds());
        } else {
            alert('No se pudo encontrar la ubicación');
        }
    });
}