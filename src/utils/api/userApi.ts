export const actualizarPerfil = async (
  userId: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  const res = await fetch("http://localhost:3000/users/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, firstName, lastName, email }),
  })
  return res
}
