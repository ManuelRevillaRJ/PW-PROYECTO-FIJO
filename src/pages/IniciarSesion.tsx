import { useState, type FormEvent } from "react";
import AuthCard from "../components/AuthCard";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/Button";
import FormTitle from "../components/FormTitle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LayoutNavBar from "../layouts/LayoutNavBar";
import { toast } from "sonner";
import { useUser } from "../hooks/useUser";

const IniciarSesion = () => {
  const { login, refresh } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (email === "" || password === "") {
      toast.error("Completa tus datos");
      return;
    }
    const loggedUser = await login(email, password); // <-- ahora es el usuario
    
    if (loggedUser) {
      refresh();
      if (loggedUser.permiso === "admin") {
        navigate("/games");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <LayoutNavBar>
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
    </LayoutNavBar>
  );
};

export default IniciarSesion;
