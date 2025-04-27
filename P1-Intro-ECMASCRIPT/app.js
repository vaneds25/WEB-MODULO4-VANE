// app.js

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Mostrar el itinerario en la página web
const mostrarItinerario = () => {
    const itinerarioList = document.getElementById('itinerario-list');
    itinerarioList.innerHTML = ''; // Limpiar el itinerario existente

    destinos.forEach((viaje) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Destino:</strong> ${viaje.destino}<br>
            <strong>Fecha:</strong> ${viaje.fecha}<br>
            <strong>Transporte:</strong> ${viaje.transporte}<br>
            <strong>Costo:</strong> $${viaje.costo}
        `;
        itinerarioList.appendChild(li);
    });
};

// Ejecutar la aplicación
iniciarApp();
