// viajes.js

// Array para guardar los destinos (usamos const ya que no va a ser reasignado)
const destinos = [];

// Función para registrar un destino de viaje (función de flecha)
const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje (función de flecha)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        default:
            costoBase = 300; // Costo por destino desconocido
            break;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados (función de flecha)
const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
}

// Exportamos las funciones para que puedan ser usadas en otro archivo
export { registrarDestino, mostrarItinerario };