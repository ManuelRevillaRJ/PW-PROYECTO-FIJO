const productos = [
  { id: 1, nombre: "PC Gamer" },
  { id: 2, nombre: "Teclado Mecanico" },
  { id: 3, nombre: "Audifonos Gamer" }
]

const contenedor = document.getElementById('carrito');

function render() {
  contenedor.innerHTML = ""

  productos.forEach((producto, index) => {
    const itemDiv = document.createElement('div')
    itemDiv.className = "item"

    itemDiv.innerHTML = `
      <span>${producto.nombre}</span>
      <button class="eliminar" onclick="eliminarItem(${index})">Eliminar</button>`

    contenedor.appendChild(itemDiv)
  });

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>"
  }
}

function eliminarItem(indice) {
  productos.splice(indice, 1)
  render()
}

render()