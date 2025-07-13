import { API_URL } from "../../secret"

export const checkoutRequest = async (userId: number, gameIdList: number[]) => {
  const res = await fetch(`${API_URL}/cart/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, gameIdList }),
  })
  return res
}
