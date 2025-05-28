import type { User } from "../types/types";

export const ListaAdmins: User[] = [
  {
    id: "2",
    correo: "melissa.maqueira@gmail.com",
    password: "123",
    nombre: "Melissa",
    token: "token",
    estado: true,
    permiso: "admin",
  },
]

export function revisarAdmin(email: string, password: string): boolean {
  for (const administrador of ListaAdmins) {
    if (administrador.correo == email && administrador.password == password) {
      return true;
    }
  }
  return false;
}

function revisarAdminAlt(permiso: string): boolean {
  for (const administrador of ListaAdmins) {
    if (administrador.permiso == "admin") {
      return true;
    }
  }
  return false;
}
