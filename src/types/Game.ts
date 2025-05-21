export type Game = {
  image?: string;
  titulo: string;
  description: string;
  videoURL?: string;
  detalleImagenes: string[]; // NUEVO: imágenes únicas por juego
};
