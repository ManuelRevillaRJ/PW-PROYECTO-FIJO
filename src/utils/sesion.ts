import type { User } from "../types/types"
// import SMTP2GOApi from "smtp2go-nodejs"

const SMTP_API_KEY = "api-41D1574A20004588A7559763B372142D"
const SENDER = "20214689@aloe.ulima.edu.pe"
// const api = SMTP2GOApi(SMTP_API_KEY)

interface iniciarSesionProps {
    mail: string
    user?: User
}

export const crearCuenta = ({ mail, user }: iniciarSesionProps) => {
    if (user) {
        sessionStorage.setItem("mail", user.correo)
    } else {
        sessionStorage.setItem("mail", mail)
    }
    // const mailService = api
    //     .mail()
    //     .to({ email: mail, name: user?.nombre ?? "Usuario" })
    //     .from({ email: SENDER })
    //     .subject("Creacion de Cuenta").html(`<h1>Hello World</h1>
    // <p>This is a test html email!</p>`)
    // api.client().consume(mailService)
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
