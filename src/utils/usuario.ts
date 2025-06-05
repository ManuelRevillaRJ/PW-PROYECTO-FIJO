interface actualizarPerfilProps {
  fields: {
    firstName: string
    lastName: string
    email: string
  }
}

export async function actualizarPerfil({ fields }: actualizarPerfilProps) {
  const res = await fetch("http://localhost:3000/users/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  })
  console.log(res)

  return true
}
