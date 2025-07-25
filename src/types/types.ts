// Usuario (uno a muchos con Venta y Calificación)
export type User = {
  id: string;
  correo: string;
  password: string;
  token?: string;
  nombre: string;
  estado: boolean;
  permiso: "user" | "admin";
};

// Noticia (sin relaciones)
export type News = {
  id: number;
  titulo: string;
  texto: string;
  activo: boolean;
};

// Venta (muchos a uno con Juego y Usuario)
export type Sale = {
  id: string;
  fecha: number; // Timestamp (milliseconds)
  usuario_id: User["id"];
  juego_id: Game["id"];
  codigo: string;
  monto_pagado: number;
};

// Juego (Game) - principal
export type Game = {
  rating?: number
  id: string
  image?: string
  titulo: string
  description: string
  precio: number
  esta_oferta: boolean
  estado?: boolean
  videoURL?: string
  cover?: string
  detalleImagenes: string[]

  // Relaciones:
  categorias: string[]
  plataformas: string[]
  ventas: Sale[]
}

// juego de backend
export type Game_DB = {
  rating: number
  id?: number
  cover: string
  titulo: string
  descripcion: string
  precio: number
  oferta?: boolean
  estado?: boolean
  videoURL: string
  imagenes: string[]

  // Relaciones:
  categoria_id? : number,
  plataformas?: string[]
  ventas?: Sale[]
}