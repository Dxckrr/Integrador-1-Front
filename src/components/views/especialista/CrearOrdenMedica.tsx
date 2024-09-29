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

  // Manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validar campos requeridos
    if (!idCita || !diagnostico || !ordenes || !recomendaciones) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    // Crear objeto de la nueva orden médica
    const newOrder = {
      idCita: idCita,
      estadoOM: estadoOM,
      fecha: new Date().toISOString(), // Fecha actual como timestamp
      diagnostico,
      ordenes,
      recomendaciones,
    };

    try {
      // Enviar la nueva orden médica al API
      const response = await fetch("http://localhost:3000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) throw new Error("Error creating order");

      // Agregar console.log para verificar la ruta
      console.log(
        "Navigating to:",
        `/especialista/orden-medica/${idCita}` // Verifica la ruta
      );

      // Navegar a la nueva ruta
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
    <div className="flex h-full px-44 bg-white">
      <div className="w-1/2 p-10">
        <h2 className="text-3xl font-semibold mb-6">Crear Orden Médica</h2>

        {/* Mostrar la información de la cita */}
        {cita ? (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg">
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
            {/* Otros detalles que quieras mostrar */}
          </div>
        ) : (
          <p>Cargando detalles de la cita...</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="estadoOM">
              Estado de la Orden
            </label>
            <select
              id="estadoOM"
              value={estadoOM}
              onChange={(e) => setEstadoOM(Number(e.target.value))}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={0}>Pendiente</option>
              <option value={1}>Completada</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-2"
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
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="ordenes">
              Órdenes
            </label>
            <textarea
              id="ordenes"
              value={ordenes}
              onChange={(e) => setOrdenes(e.target.value)}
              placeholder="Ingrese las órdenes"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="recomendaciones"
            >
              Recomendaciones
            </label>
            <textarea
              id="recomendaciones"
              value={recomendaciones}
              onChange={(e) => setRecomendaciones(e.target.value)}
              placeholder="Ingrese las recomendaciones"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-16"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-16 rounded-xl"
          >
            Guardar Orden
          </button>
        </form>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-between">
        <img
          src="..\..\src\assets\img\logos\LogoSanavit(Mediana).png"
          alt="Logo"
          className="w-1/2 mx-auto mt-72"
        />
      </div>
    </div>
  );
};

export default CrearOrdenMedica;
