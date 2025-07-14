import { API_URL } from "../../secret"
import type { Game_DB } from "../../types/types"
import { getHeaders } from "./headers"

export const gamesRequest = async () => {
  const res = await fetch(`${API_URL}/games`, {
    headers: getHeaders(),
  })
  return res
}

export const addGamesRequest = async (game: Game_DB) => {
  const response = await fetch(`${API_URL}/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
  
  return response
}

export const topRatedRequest = async () => {
  const res = await fetch(`${API_URL}/games/top-rated`, {
    headers: getHeaders(),
  })
  return res
}

export const bestSellersRequest = async () => {
  const res = await fetch(`${API_URL}/games/best-sellers`, {
    headers: getHeaders(),
  })
  return res
}

export const gamesParamsRequest = async (params: Record<string, string | string[]>) => {
  const url = new URL(`${API_URL}/games`)
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => url.searchParams.append(key, v))
    } else {
      url.searchParams.append(key, value)
    }
  })

  const res = await fetch(`${API_URL}/games`, {
    headers: getHeaders(),
  })

  return res
}

export const gameRequest = async (id: number) => {
  const res = await fetch(`${API_URL}/games/${id}`, {
    headers: getHeaders(),
  })
  return res
}
