const token = localStorage.getItem("token");
const contenedor = document.getElementById("carro");
const totalSpan = document.getElementById("total");
const botonPagar = document.getElementById("but");

function cargarCarrito() {
  fetch("http://localhost:3000/carrito", {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(juegos => render(juegos))
    .catch(err => console.error("Error al cargar carrito:", err));
}

// ✅ Mostrar los juegos y calcular total
function render(productos) {
  contenedor.innerHTML = "";
  let total = 0;

  productos.forEach(producto => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    itemDiv.innerHTML = `
      <span>${producto.juego.nombre}</span>
      <span>$${producto.juego.precio.toFixed(2)}</span>
    `;

    contenedor.appendChild(itemDiv);
    total += producto.juego.precio;
  });

  totalSpan.textContent = total.toFixed(2);
}

// ✅ Conectar botón para realizar pago
botonPagar.addEventListener("click", () => {
  fetch("http://localhost:3000/carrito/checkout", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      alert("Compra realizada con éxito. Te enviaremos una boleta al correo registrado.");
      cargarCarrito(); 
    })
    .catch(err => {
      console.error("Error al realizar compra:", err);
      alert("Ocurrió un error al realizar la compra.");
    });
});

cargarCarrito(); 


render();
