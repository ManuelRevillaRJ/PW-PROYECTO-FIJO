import { API_URL } from "../../secret"

export const signupRequest = async (nombre: string, correo: string, password: string) => {
  const res = await fetch(`${API_URL}/sessions/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, correo, password }),
  })
  return res
}

export const loginRequest = async (correo: string, password: string) => {
  const res = await fetch(`${API_URL}/sessions/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password }),
  })
  return res
}

export const changePasswordRequest = async (correo: string, newPassword: string) => {
  const res = await fetch(`${API_URL}/sessions/change_pass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, newPassword }),
  })
  return res
}
