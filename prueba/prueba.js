let carrito = ""; // Variable para almacenar los productos del carrito

function agregarProducto() {
  let producto = prompt("Ingrese el nombre del producto:");
  carrito += producto + "\n";
  console.log("Se ha agregado el producto al carrito: " + producto);
}

function mostrarCarrito() {
  console.log("Productos en el carrito:");
  console.log(carrito);
}

// Menú principal
while (true) {
  let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Mostrar carrito\n3. Salir");

  if (opcion === "1") {
    agregarProducto();
  } else if (opcion === "2") {
    mostrarCarrito();
  } else if (opcion === "3") {
    console.log("¡Gracias por usar el carrito!");
    break;
  } else {
    console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
}

