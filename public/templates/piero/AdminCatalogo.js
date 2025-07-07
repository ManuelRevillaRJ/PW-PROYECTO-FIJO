const token = localStorage.getItem("token");
const contenedor = document.getElementById("catalogo");

// Verifica si hay token
if (!token) {
  alert("Debes iniciar sesión como administrador.");
} else {
  fetch("http://localhost:3000/admin/catalogo", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Acceso denegado. Solo admins.");
      return res.json();
    })
    .then(juegos => {
      contenedor.innerHTML = "";
      juegos.forEach(juego => {
        const div = document.createElement("div");
        div.className = "juego";
        div.innerHTML = `
          <strong>${juego.nombre}</strong> - $${juego.precio}<br>
          <small>${juego.descripcion || "Sin descripción"}</small>
          <hr>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(err => {
      contenedor.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    });
}
