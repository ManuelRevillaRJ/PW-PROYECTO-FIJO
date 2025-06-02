import type { User } from "../types/types";

interface iniciarSesionProps {
  user: User;
}

export const crearCuenta = async ({ user }: iniciarSesionProps) => {
  sessionStorage.setItem("mail", user.correo);
  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  console.log(res);
};

export const iniciarSesion = ({ user }: iniciarSesionProps) => {
  sessionStorage.setItem("mail", user.correo);
};

export const cerrarSesion = () => {
  sessionStorage.removeItem("mail");
};
