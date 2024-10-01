import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Appointment {
  idCita: number;
  dia: string;
  hora: string;
  estadoCita: boolean;
  idServicio: number;
  idHistoria_Medica: number;
  idUsuarioCC: string;
  idDocCC: string;
}

const CrearOrdenMedica = () => {
  const [estadoOM, setEstadoOM] = useState<number>(0);
  const [diagnostico, setDiagnostico] = useState<string>("");
  const [ordenes, setOrdenes] = useState<string>("");
  const [recomendaciones, setRecomendaciones] = useState<string>("");
  const [cita, setCita] = useState<Appointment | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { idCita } = location.state || {};

  useEffect(() => {
    const fetchCita = async () => {
      if (!idCita) return;

      try {
        const response = await fetch(
          `http://localhost:3000/api/appointments/${idCita}`
        );
        if (!response.ok) throw new Error("Error fetching cita");

        const data = await response.json();
        setCita(data);
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al conectar con el servidor.");
      }
    };

    fetchCita();
  }, [idCita]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!idCita || !diagnostico || !ordenes || !recomendaciones) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    const newOrder = {
      idCita: idCita,
      estadoOM: estadoOM,
      fecha: new Date().toISOString(),
      diagnostico,
      ordenes,
      recomendaciones,
    };

    try {
      const response = await fetch("http://localhost:3000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) throw new Error("Error creating order");

      navigate(`/especialista/historia-clinica/${idCita}`, {
        state: { idCita: idCita },
      });

      alert("Orden Médica creada con éxito.");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="flex h-full px-10 bg-white">
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">Crear Orden Médica</h2>

        {cita ? (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Detalles de la Cita</h3>
            <p>
              <strong>ID de Cita:</strong> {cita.idCita}
            </p>
            <p>
              <strong>Fecha:</strong> {new Date(cita.dia).toLocaleDateString()}
            </p>
            <p>
              <strong>Hora:</strong> {cita.hora}
            </p>
            <p>
              <strong>Paciente (CC):</strong> {cita.idUsuarioCC}
            </p>
            <p>
              <strong>Doctor (CC):</strong> {cita.idDocCC}
            </p>
          </div>
        ) : (
          <p>Cargando detalles de la cita...</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="estadoOM">
              Estado de la Orden
            </label>
            <select
              id="estadoOM"
              value={estadoOM}
              onChange={(e) => setEstadoOM(Number(e.target.value))}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-lg w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={0}>Pendiente</option>
              <option value={1}>Completada</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-1"
              htmlFor="diagnostico"
            >
              Diagnóstico
            </label>
            <input
              id="diagnostico"
              type="text"
              value={diagnostico}
              onChange={(e) => setDiagnostico(e.target.value)}
              placeholder="Ingrese el diagnóstico"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-lg w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1" htmlFor="ordenes">
              Órdenes
            </label>
            <textarea
              id="ordenes"
              value={ordenes}
              onChange={(e) => setOrdenes(e.target.value)}
              placeholder="Ingrese las órdenes"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-lg w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline h-20"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-1"
              htmlFor="recomendaciones"
            >
              Recomendaciones
            </label>
            <textarea
              id="recomendaciones"
              value={recomendaciones}
              onChange={(e) => setRecomendaciones(e.target.value)}
              placeholder="Ingrese las recomendaciones"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-lg w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline h-16"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg"
          >
            Guardar Orden
          </button>
        </form>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img
          src="..\..\src\assets\img\logos\LogoSanavit(Mediana).png"
          alt="Logo"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default CrearOrdenMedica;
