import type { User } from "../types/types"

interface iniciarSesionProps {
    mail: string
    user?: User
}

export const iniciarSesion = ({ mail, user }: iniciarSesionProps) => {
    if (user) {
        sessionStorage.setItem("mail", user.correo)
    } else {
        sessionStorage.setItem("mail", mail)
    }
}

export const cerrarSesion = () => {
    sessionStorage.removeItem("mail")
}
