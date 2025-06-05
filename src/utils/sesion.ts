import type { User } from "../types/types"

export const crearCuenta = async (user: User) => {
  sessionStorage.setItem("mail", user.correo)
  const res = await fetch("http://localhost:3000/sessions/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
  console.log(res)
}

export const iniciarSesion = (correo: string) => {
  sessionStorage.setItem("mail", correo)
  // TODO: que revise si existe correo en backend
}

export const cerrarSesion = () => {
  sessionStorage.removeItem("mail")
}

export async function passChange(correo: string, newPass: string) {
  try {
    const res = await fetch("http://localhost:3000/sessions/change_pass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: correo, newPassword: newPass }),
    })

    if (!res.ok) {
      const errorText = res.body
      console.error(errorText)
      return false
    }

    sessionStorage.removeItem("mail")
    console.log(res.body)
    return true
  } catch (error) {
    console.error("Network or server error:", error)
    return false
  }
}
