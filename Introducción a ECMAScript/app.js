// app.js

// Importar las funciones desde el archivo viajes.js
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación (función de flecha)
const iniciarApp = () => {
    // Registrar algunos destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes registrados
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
