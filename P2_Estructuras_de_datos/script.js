// Lista vacía de compras
let listaDeCompras = [];

// Agregar producto (sin duplicados)
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`✅ ${producto} agregado a la lista.`);
    } else {
        console.log(`⚠️ ${producto} ya está en la lista.`);
    }
};

// Eliminar producto
const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`🗑️ ${producto} eliminado de la lista.`);
    } else {
        console.log(`❌ ${producto} no está en la lista.`);
    }
};

// Mostrar lista completa
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("📝 La lista está vacía.");
    } else {
        console.log("📋 Lista de compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
};

// Ejemplo de uso
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Huevos");
agregarProducto("Pan"); // Producto duplicado
mostrarLista();
eliminarProducto("Leche");
mostrarLista();
eliminarProducto("Queso"); // Producto no existente
