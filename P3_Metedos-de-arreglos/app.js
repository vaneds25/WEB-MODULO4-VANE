// Lista de productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Filtrar productos que cuesten menos de $100
const productosFiltrados = productos.filter(producto => producto.precio < 100);

// Ordenar los productos filtrados alfabéticamente por su nombre
const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Obtener los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

// Mostrar resultados en consola
console.log("Productos filtrados (menos de $100):", productosFiltrados);
console.log("Productos ordenados alfabéticamente:", productosOrdenados);
console.log("Nombres de productos:", nombresProductos);

// Mostrar en la página web
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
    <h2>Productos Filtrados:</h2>
    <pre>${JSON.stringify(productosFiltrados, null, 2)}</pre>
    <h2>Productos Ordenados:</h2>
    <pre>${JSON.stringify(productosOrdenados, null, 2)}</pre>
    <h2>Nombres de Productos:</h2>
    <pre>${nombresProductos.join(", ")}</pre>
`;

