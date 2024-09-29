import { useEffect, useState } from "react";
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

function HistoriaClinica() {
  const [idHistoriaMedica, setIdHistoriaMedica] = useState<number | null>(null);
  const [tipoSangre, setTipoSangre] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [fechaNac, setFechaNac] = useState<string>("");
  const [discapacidad, setDiscapacidad] = useState<string>("");
  const [fechaRev, setFechaRev] = useState<string>("");
  const [horaRev, setHoraRev] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [descripcionMotivo, setDescripcionMotivo] = useState<string>("");

  // Signos vitales
  const [presionSang, setPresionSang] = useState<string>("");
  const [presionSangProm, setPresionSangProm] = useState<string>("");
  const [pulso, setPulso] = useState<string>("");
  const [saturacion, setSaturacion] = useState<string>("");
  const [altura, setAltura] = useState<number | undefined>();
  const [peso, setPeso] = useState<number | undefined>();

  // Antecedentes médicos
  const [perinatales, setPerinatales] = useState<string>("");
  const [patologicos, setPatologicos] = useState<string>("");
  const [quirurgicos, setQuirurgicos] = useState<string>("");
  const [vacunas, setVacunas] = useState<string>("");
  const [antecedentesFamiliares, setAntecedentesFamiliares] =
    useState<string>("");
  const [conclusiones, setConclusiones] = useState<string>("");

  const [cita, setCita] = useState<Appointment | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { idCita } = location.state || {};

  useEffect(() => {
    const fetchCita = async () => {
      if (!idCita) {
        console.warn("No se proporcionó idCita");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/appointments/${idCita}`
        );
        if (!response.ok) {
          console.error("Error al recuperar la cita:", response.status);
          throw new Error("Error fetching cita");
        }
        const data = await response.json();
        setCita(data);
        // Al establecer la cita, asigna idHistoriaMedica si ya existe
        if (data.idHistoria_Medica) {
          setIdHistoriaMedica(data.idHistoria_Medica);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al conectar con el servidor.");
      }
    };

    fetchCita();
  }, [idCita]);

  const formatDateForDB = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10); // 'YYYY-MM-DD'
  };

  const crearHistoriaClinica = async () => {
    try {
      const diaFormatted = formatDateForDB(cita?.dia || "");
      const historiaClinicaData = {
        tipoSangre,
        genero,
        fecha_Nac: fechaNac,
        discapacidad,
        fecha_Rev: fechaRev,
        hora_Rev: horaRev,
        motivo,
        descripcion_Motivo: descripcionMotivo,
        presion_Sangre: presionSang,
        presion_Sangre_Prom: presionSangProm,
        pulso,
        saturacion,
        altura,
        peso,
        perinatales,
        patologicos,
        quirurgicos,
        vacunas,
        familiares: antecedentesFamiliares,
        conclusion: conclusiones,
      };

      const response = await fetch(
        "http://localhost:3000/api/medical-history/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(historiaClinicaData),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error al crear la historia clínica:", errorResponse);
        throw new Error(
          errorResponse.message || "Error al crear la historia clínica"
        );
      }

      const nuevaHistoria = await response.json();
      setIdHistoriaMedica(nuevaHistoria.idHistoriaMedica); // Actualiza el ID de la historia clínica

      // Actualiza la cita con el nuevo idHistoria_Medica
      if (cita) {
        const actualizarCitaResponse = await fetch(
          `http://localhost:3000/api/appointments/${cita.idCita}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idHistoria_Medica: nuevaHistoria.idHistoriaMedica,
              dia: diaFormatted,
              hora: cita.hora,
              estadoCita: cita.estadoCita,
              idServicio: cita.idServicio,
              idUsuarioCC: cita.idUsuarioCC,
              idDocCC: cita.idDocCC,
            }),
          }
        );

        if (!actualizarCitaResponse.ok) {
          const errorResponse = await actualizarCitaResponse.json();
          console.error(
            "Error al asignar la historia clínica a la cita:",
            errorResponse
          );
          throw new Error(
            errorResponse.message ||
              "Error al asignar la historia clínica a la cita"
          );
        }
      }

      alert("Historia clínica creada y asignada a la cita correctamente.");
      navigate("/especialista/citas");
    } catch (error) {
      console.error("Error al crear la historia clínica:", error);
      alert("Hubo un problema al crear la historia clínica.");
    }
  };

  return (
    <div className="flex flex-col h-full px-44 bg-white space-y-10 pb-24">
      <div className="p-10">
        <h1 className="text-3xl font-semibold mb-10">Historia Clínica</h1>

        {/* Datos del paciente */}
        <div className="mb-10">
          <h2 className="text-sm font-bold mb-4">Datos del paciente</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Tipo de Sangre"
              value={tipoSangre}
              onChange={(e) => setTipoSangre(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Género"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="date"
              value={fechaNac}
              onChange={(e) => setFechaNac(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Discapacidad"
              value={discapacidad}
              onChange={(e) => setDiscapacidad(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3"
            />
          </div>
        </div>

        {/* Consulta */}
        <div className="mb-10">
          <h2 className="text-sm font-bold mb-4">Consulta</h2>
          <div className="flex space-x-4">
            <input
              type="date"
              value={fechaRev}
              onChange={(e) => setFechaRev(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="time"
              value={horaRev}
              onChange={(e) => setHoraRev(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Motivo de la Consulta"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
          </div>
          <textarea
            placeholder="Descripción del Motivo"
            value={descripcionMotivo}
            onChange={(e) => setDescripcionMotivo(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
        </div>

        {/* Signos Vitales */}
        <div className="mb-10">
          <h2 className="text-sm font-bold mb-4">Signos Vitales</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Presión Sanguínea"
              value={presionSang}
              onChange={(e) => setPresionSang(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Promedio de Presión"
              value={presionSangProm}
              onChange={(e) => setPresionSangProm(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Pulso"
              value={pulso}
              onChange={(e) => setPulso(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <input
              type="text"
              placeholder="Saturación"
              value={saturacion}
              onChange={(e) => setSaturacion(e.target.value)}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="number"
              placeholder="Altura (cm)"
              value={altura}
              onChange={(e) => setAltura(Number(e.target.value))}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
            <input
              type="number"
              placeholder="Peso (kg)"
              value={peso}
              onChange={(e) => setPeso(Number(e.target.value))}
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
            />
          </div>
        </div>

        {/* Antecedentes Médicos */}
        <div className="mb-10">
          <h2 className="text-sm font-bold mb-4">Antecedentes Médicos</h2>
          <textarea
            placeholder="Antecedentes Perinatales"
            value={perinatales}
            onChange={(e) => setPerinatales(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
          <textarea
            placeholder="Antecedentes Patológicos"
            value={patologicos}
            onChange={(e) => setPatologicos(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
          <textarea
            placeholder="Antecedentes Quirúrgicos"
            value={quirurgicos}
            onChange={(e) => setQuirurgicos(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
          <textarea
            placeholder="Vacunas"
            value={vacunas}
            onChange={(e) => setVacunas(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
          <textarea
            placeholder="Antecedentes Familiares"
            value={antecedentesFamiliares}
            onChange={(e) => setAntecedentesFamiliares(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 mt-4 h-24"
          />
        </div>

        {/* Conclusiones */}
        <div className="mb-10">
          <h2 className="text-sm font-bold mb-4">Conclusiones</h2>
          <textarea
            placeholder="Conclusiones"
            value={conclusiones}
            onChange={(e) => setConclusiones(e.target.value)}
            className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 h-24"
          />
        </div>

        <button
          onClick={crearHistoriaClinica}
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-16 rounded-xl"
        >
          Guardar Historia Clínica
        </button>
      </div>
    </div>
  );
}

export default HistoriaClinica;
