function tomarCamion() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "⌛ Esperando al camión...";
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const camiónLlega = Math.random() > 0.3;
  
        if (camiónLlega) {
          resolve("🚌 ¡El camión llegó! Subes y sigues tu camino.");
        } else {
          reject("😢 El camión no llegó... Tendrás que caminar.");
        }
      }, 3000);
    });
  }
  
  document.getElementById("esperarBtn").addEventListener("click", () => {
    tomarCamion()
      .then(mensajeOk => {
        document.getElementById("mensaje").textContent = mensajeOk;
      })
      .catch(error => {
        document.getElementById("mensaje").textContent = error;
      });
  });
  