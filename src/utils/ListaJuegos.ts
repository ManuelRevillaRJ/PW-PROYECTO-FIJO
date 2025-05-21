import type { Game } from "../types/Game";

export const ListaGames: Game[] = [
  {
    id: "1",
    titulo: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y distribuido por Rockstar Games.",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/2/28/V_trevorfranklinmichael.jpg?width=640",
    videoURL: "https://www.youtube.com/embed/QkkoHAzjnUs",
    detalleImagenes: [
      "https://i.blogs.es/4d1062/gta-v/1366_2000.jpeg",
      "https://media.rockstargames.com/rockstargames/img/global/news/upload/GTAO640image.jpg",
      "https://i.blogs.es/0d5188/v-igg1-2880x1800/1366_2000.jpeg",
    ],
    rating: 4.8,
    precio: 59.99,
    categoria_id: 1,
    esta_oferta: true,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" },
    ],
    ventas: [],
  },
  {
    id: "2",
    titulo: "Stardew Valley",
    description:
      "simulación de granja desarrollado por Eric ConcernedApe Barone y publicado por Chucklefish Games (actualmente por ConcernedApe). ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146",
    videoURL: "https://www.youtube.com/embed/ot7uXNQskhs",
    detalleImagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xir6ckE-F1dzm_IsSXW8NkSfzrcnSxhvXg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwjV19g36n4h_hKIMGdQcHDQkbkkCqSg9uw&s",
      "https://cdn.dlcompare.com/others_jpg/upload/media/file/stardew-valley-patch-notes-file-36fdd760.jpg.webp",
    ],
    rating: 4.2,
    precio: 39.99,
    categoria_id: 2,
    esta_oferta: false,
    estado: true,
    categoria: { id: 2, nombre: "Aventura" },
    plataformas: [{ id: 1, nombre: "PC" }],
    ventas: [],
  },
  {
    id: "3",
    titulo: "Schedule I",
    description: "Simulador de Breaking Bad",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/3a542c825f36b33cd1f8fe51d28ed5eee7abc75d/capsule_616x353.jpg?t=1747246016",
    videoURL: "https://www.youtube.com/embed/GUPZ2xMey6Q",
    detalleImagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fx9-ClPlWqwz5rEqCwi5gBi-E0xV7q8Xiw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaIQMd0PsU6xQdQKtXFmhlU-pouTwmCj5GQ&s",
      "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
    ],
    rating: 3.9,
    precio: 29.99,
    categoria_id: 4,
    esta_oferta: true,
    estado: true,
    categoria: { id: 4, nombre: "Multiplayer" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 4, nombre: "Xbox" },
    ],
    ventas: [],
  },
  {
    id: "simulación de granja desarrollado por Eric ConcernedApe Barone y publicado por Chucklefish Games (actualmente por ConcernedApe). ",
    titulo: "R.E.P.O",
    description:
      "Videojuego cooperativo de terror y supervivencia en línea , desarrollado y publicado por el estudio sueco Semiwork para Windows .",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/2cff5912c1add2e009eb1c1c630a47ac06cb81a1/capsule_616x353.jpg?t=1747381002",
    videoURL: "https://www.youtube.com/embed/oSfoK8eSeD8",
    detalleImagenes: [
      "https://generacionxbox.com/wp-content/uploads/2025/03/repo-guia-nuevos-jugadores.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeokBQUC3ekgTdN81xIzs3nkQrMMXeYuqudg&s",
      "https://i.blogs.es/178524/requisitos-repo-pc/500_333.jpeg",
    ],
    rating: 4.3,
    precio: 19.99,
    categoria_id: 5,
    esta_oferta: false,
    estado: true,
    categoria: { id: 5, nombre: "Horror" },
    plataformas: [{ id: 2, nombre: "PC" }],
    ventas: [],
  },
];
