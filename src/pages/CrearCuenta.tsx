import { useState, type FormEvent } from "react";
import AuthCard from "../components/AuthCard";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormTitle from "../components/FormTitle";
import { Link } from "react-router-dom";


const CrearCuenta = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    // prueba
    console.log({ nombre, email, password });

    // aca poner que envie correo de confirmacion y que envíe a la pagina de confirmacion
  };


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
        <SubmitButton label="Crear" />
      </form>
      <Link to="/iniciar_sesion" className="d-block mt-3">
        ¿Ya tienes una cuenta?
      </Link>
    </AuthCard>
  );
};

export default CrearCuenta;
