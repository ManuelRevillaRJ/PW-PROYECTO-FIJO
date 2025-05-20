const juegos = [
  { id: 1, nombre: "The Last Of Us Parte II", precio: 159 },
  { id: 2, nombre: "Detroit Become Human", precio: 155 },
  { id: 3, nombre: "Resident Evil Village", precio: 80 }
];

const contenedor = document.getElementById("carro");
const totalSpan = document.getElementById("total");
const botonPagar = document.getElementById("but");

function render() {
  contenedor.innerHTML = ""; 
  let total = 0;

  juegos.forEach(producto => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    itemDiv.innerHTML = `
      <span>${producto.nombre}</span>
      <span>$${producto.precio.toFixed(2)}</span>
    `;

    contenedor.appendChild(itemDiv);
    total += producto.precio;
  });

  totalSpan.textContent = total.toFixed(2);
}

botonPagar.addEventListener("click", () => {
  if (juegos.length === 0) {
    alert("No ha seleccionado ningún juego");
    return;
  }

  alert("Tu compra ha sido realizada correctamente, te enviaremos una boleta/factua de compra al correo registrado");

  juegos.length = 0;
  render();
});

render();
