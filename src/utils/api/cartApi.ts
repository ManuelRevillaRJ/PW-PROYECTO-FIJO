import { API_URL } from "../../secret"

export const checkoutRequest = async (correo: string, gameIdList: number[]) => {
  const res = await fetch(`${API_URL}/cart/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, gameIdList }),
  })
  return res
}
