import { useState, type FormEvent } from "react";
import AuthCard from "../components/AuthCard";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormTitle from "../components/FormTitle";
import { Link, useNavigate } from "react-router-dom"
import LayoutNavBar from "../layouts/LayoutNavBar"
import { toast } from "sonner"
import { useUser } from "../hooks/useUser"

const CrearCuenta = () => {
  const { signup } = useUser()
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const navigate = useNavigate()

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    if (nombre === "" || email === "" || password === "") {
      toast.error("Completa tus datos")
      return
    }

    const success = await signup(nombre, email, password)
    if (success) {
      navigate("/")
    }
  }

  return (
    <LayoutNavBar>
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
        {/* {(() => {
          if (nombre == "" || !email.includes("@") || !email.includes(".") || password == "") {
            return (
              <button type="button" className="btn btn-danger mx-auto p-2">
                Los datos ingresados son incorrectos
              </button>
            )
          }
        })()} */}
        <Link to="/iniciar_sesion" className="d-block mt-3">
          ¿Ya tienes una cuenta?
        </Link>
      </AuthCard>
    </LayoutNavBar>
  )
}

export default CrearCuenta;
