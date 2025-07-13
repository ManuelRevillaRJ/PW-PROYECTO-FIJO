import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { toast } from "sonner"
import type { User } from "../types/types"
import { loginRequest, signupRequest, changePasswordRequest } from "../utils/api/sessionsApi"
import { useNavigate } from "react-router-dom"
import { actualizarPerfil } from "../utils/api/userApi"

export const useUser = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    const token = localStorage.getItem("token")
    if (token) {
      setToken(token)
    } else return

    try {
      const decoded: User = jwtDecode(token)
      setUser(decoded)
      console.log(decoded)
    } catch (error) {
      console.error("Token decode failed", error)
    }
  }

  const login = async (correo: string, password: string) => {
    try {
      const res = await loginRequest(correo, password)

      if (!res.ok) {
        const msg = await res.json()
        toast.error(msg.message)
        return null
      }

      const data = await res.json()
      localStorage.setItem("token", data.token)
      setToken(data.token)

      const decoded: User = jwtDecode(data.token)
      setUser(decoded)

      toast.success("Inicio de sesión exitoso")
      return decoded
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const signup = async (nombre: string, correo: string, password: string) => {
    try {
      const res = await signupRequest(nombre, correo, password)

      if (!res.ok) {
        const msg = await res.json()
        toast.error(msg.message)
      }

      const data = await res.json()
      localStorage.setItem("token", data.token)
      setToken(data.token)

      const decoded: User = jwtDecode(data.token)
      setUser(decoded)

      toast.success("Registro exitoso")
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const changePassword = async (correo: string, newPass: string) => {
    try {
      const res = await changePasswordRequest(correo, newPass)
      if (!res.ok) {
        const msg = await res.json()
        toast.error(msg.message)
      }

      sessionStorage.removeItem("mail")
      toast.success("Contraseña cambiada correctamente")
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const updateProfile = async (
    userId: string | undefined,
    firstName: string,
    lastName: string,
    email: string
  ) => {
    if (!userId || userId === undefined) return null
    try {
      const res = await actualizarPerfil(userId, firstName, lastName, email)
      if (!res.ok) {
        const msg = await res.json()
        toast.error(msg.error)
        return null
      }

      const data = await res.json()

      localStorage.setItem("token", data.token)
      setToken(data.token)

      const decoded: User = jwtDecode(data.token)
      setUser(decoded)

      toast.success(data.message)
      return decoded
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
    toast.info("Cierre de sesión")
    navigate("/")
    // window.location.reload()
  }

  return {
    user,
    token,
    isLoggedIn: !!user,
    login,
    signup,
    logout,
    changePassword,
    updateProfile,
    refresh,
  }
}
