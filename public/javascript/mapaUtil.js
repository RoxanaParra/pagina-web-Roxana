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

    let coordinates = {
        lat:0, 
        lng: 0
    };

    // Obtener la ubicación del cliente por defecto del navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            coordinates.lat = position.coords.latitude;
            coordinates.lng = position.coords.longitude;

            // Añadir un marcador en la ubicación del cliente
            L.marker([coordinates.lat, coordinates.lng]).addTo(map)
                .bindPopup('Cliente')
                .openPopup();

            // Añadir un marcador en la ubicación de Madrid
            L.marker([40.416775, -3.703790]).addTo(map)
                .bindPopup('Madrid')
                .openPopup();

            // Dibujar una línea entre la ubicación del negocio y la del cliente
            var ruta = L.polyline([[40.416775, -3.703790], [coordinates.lat, coordinates.lng]], { color: 'blue' }).addTo(map);

            // Ajustar el zoom para ver ambas ubicaciones
            map.fitBounds(ruta.getBounds());
        }, error => {
            console.error("Error obteniendo la ubicación: ", error);
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        console.error("Geolocalización no disponible");
    }
}


calcularRuta();