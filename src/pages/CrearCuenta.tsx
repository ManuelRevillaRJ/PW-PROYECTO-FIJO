import { useState, type FormEvent } from "react"
import AuthCard from "../components/AuthCard"
import FormInput from "../components/FormInput"
import SubmitButton from "../components/Button"
import FormTitle from "../components/FormTitle"
import { Link, useNavigate } from "react-router-dom"
import { iniciarSesion } from "../utils/sesion"

const CrearCuenta = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        // prueba
        console.log({ nombre, email, password })

        // aca poner que envie correo de confirmacion y que envíe a la pagina de confirmacion
        iniciarSesion({ mail: email })
        navigate("/")
    }

    return (
        <AuthCard>
            <form onSubmit={handleSubmit}>
                <FormTitle
                    title="Crear Cuenta en GameStore"
                    description="Llene los siguientes datos para crear una cuenta:"
                />
                <FormInput
                    label="Nombre"
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.currentTarget.value)}
                />
                <FormInput
                    label="Correo Electrónico"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <FormInput
                    label="Contraseña"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <SubmitButton label="Crear" className="mx-auto p-2" />
            </form>
            {(() => {
                if (
                    nombre == "" ||
                    !email.includes("@") ||
                    !email.includes(".") ||
                    password == ""
                ) {
                    return (
                        <button
                            type="button"
                            className="btn btn-danger mx-auto p-2"
                        >
                            Los datos ingresados son incorrectos
                        </button>
                    )
                }
            })()}

            <Link to="/iniciar_sesion" className="d-block mt-3">
                ¿Ya tienes una cuenta?
            </Link>
        </AuthCard>
    )
}

export default CrearCuenta
