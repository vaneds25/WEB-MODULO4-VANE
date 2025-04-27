const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0] === arr[siguiente][0]) {
            // Si coinciden, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }

        // Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

const resultado = encontrarPareja(invitados);
console.log(resultado); // Resultado: ["Carlos", "Cecilia"]

// Mostrar en la página web
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = resultado ? 
    `<h2>Primer par de invitados que pueden sentarse juntos:</h2>
    <p>${resultado[0]} y ${resultado[1]}</p>` : 
    `<h2>No se encontró ningún par de invitados que puedan sentarse juntos.</h2>`;
