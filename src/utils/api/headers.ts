export const getHeaders = (): HeadersInit => {
  const token = localStorage.getItem("token")

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}
