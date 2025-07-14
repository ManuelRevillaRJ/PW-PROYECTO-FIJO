import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

type VentaMensual = {
  mes: string;
  ganancia: number;
};

export default function IngresosMensuales() {
  const [data, setData] = useState<VentaMensual[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://pw-proyecto-fijo-backend.onrender.com/games/ventas-mensuales");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error al obtener ventas mensuales:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  if (loading) return <p>Cargando datos...</p>;

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
