import { useState, type FormEvent } from "react"
import AuthCard from "../components/AuthCard"
import FormInput from "../components/FormInput"
import SubmitButton from "../components/Button"
import FormTitle from "../components/FormTitle"
import { Link } from "react-router-dom"
import { revisarAdmin } from "../utils/admins"
import { useNavigate } from "react-router-dom"
import { iniciarSesion } from "../utils/sesion"
import Layout from "../layouts/Layout"

const IniciarSesion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  let siExiste: null | boolean = true

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    // prueba
    console.log({ email, password })

    // verificacion que existan en base de datos, ahorita prelim
    siExiste = true
    iniciarSesion(email)
    if (revisarAdmin(email, password)) {
      navigate("/games")
    }
  }

  return (
    <Layout>
      <AuthCard>
        <form onSubmit={handleSubmit}>
          <FormTitle
            title="Iniciar Sesión en GameStore"
            description="Llene los siguientes datos para ingresar:"
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
          <SubmitButton label="Ingresar" className="mx-auto p-2" />
        </form>
        {(() => {
          if (!siExiste || !email.includes("@") || !email.includes(".") || password == "") {
            return (
              <button type="button" className="btn btn-danger mx-auto p-2">
                Los datos ingresados son incorrectos
              </button>
            )
          }
        })()}

        <div className="row justify-content-around">
          <div className="col-4">
            <Link to="/crear_cuenta" className="d-block mt-3">
              ¿No tienes una cuenta?
            </Link>
          </div>
          <div className="col-4">
            <Link to="/cambio-contra" className="d-block mt-3">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default IniciarSesion
