const token = localStorage.getItem("token");
const contenedor = document.getElementById('carrito');

function cargarCarrito() {
  fetch("http://localhost:3000/carrito", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(juegos => render(juegos))
    .catch(err => console.error("Error cargando el carrito:", err));
}

function render(productos) {
  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
      <span>${producto.juego.nombre}</span>
      <button class="eliminar" onclick="eliminarItem(${producto.juego.id})">Eliminar</button>
    `;
    contenedor.appendChild(itemDiv);
  });

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
  }
}

function eliminarItem(idDelJuego) {
  fetch(`http://localhost:3000/carrito/item/${idDelJuego}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(() => cargarCarrito()) 
    .catch(err => console.error("Error eliminando ítem:", err));
}

cargarCarrito(); 
