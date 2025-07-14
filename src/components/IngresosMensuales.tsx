import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Traductor de meses numéricos a español
const mesesES = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Tipo esperado de cada venta que devuelve el backend
type VentaPorMes = {
  mes: string;           // formato: "2025-07"
  totalVentas: number;   // monto acumulado
};

type DatoGrafico = {
  mes: string;
  ganancia: number;
};

export default function IngresosMensuales() {
  const [data, setData] = useState<DatoGrafico[]>([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://pw-proyecto-fijo-backend.onrender.com/games/ventas/por-mes");
        if (!res.ok) throw new Error("Error al obtener los datos");
        const ventas: VentaPorMes[] = await res.json();

        // Agrupamos las ventas por nombre de mes y sumamos ganancias
        const agrupado = ventas.reduce((acc: Record<string, number>, venta) => {
          const [_, mesStr] = venta.mes.split("-");
          const indexMes = parseInt(mesStr, 10) - 1;
          const nombreMes = mesesES[indexMes];

          if (!acc[nombreMes]) acc[nombreMes] = 0;
          acc[nombreMes] += venta.totalVentas;

          return acc;
        }, {});

        // Convertimos a formato que espera Recharts (meses ordenados)
        const datosFinales: DatoGrafico[] = mesesES.map((mes) => ({
          mes,
          ganancia: agrupado[mes] ?? 0,
        }));

        setData(datosFinales);
      } catch (error) {
        console.error("Error al cargar datos de ventas:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ganancia" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

/*
[
  {
    "juegoId": 1,
    "titulo": "God of War",
    "mes": "2025-06",
    "totalVentas": 59.98,
    "cantidadVentas": 2
  },
  {
    "juegoId": 2,
    "titulo": "Hollow Knight",
    "mes": "2025-06",
    "totalVentas": 89.97,
    "cantidadVentas": 3
  },
  {
    "juegoId": 1,
    "titulo": "God of War",
    "mes": "2025-07",
    "totalVentas": 39.99,
    "cantidadVentas": 1
  }
]

*/