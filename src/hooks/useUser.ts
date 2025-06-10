import { useEffect, useState } from "react"
import type { User } from "../types/types"
import { jwtDecode } from "jwt-decode"

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const decoded: User = jwtDecode(token)
      setUser(decoded)
    } catch (error) {
      console.log(error)
      localStorage.removeItem("token")
      setUser(null)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const isLoggedIn = !!user

  return { user, logout, isLoggedIn }
}
