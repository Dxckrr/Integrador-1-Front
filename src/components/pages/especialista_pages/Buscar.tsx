import React, { useEffect, useState } from "react";
import Paciente from "../../especialista_components/PacienteComponent";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";

const Buscar: React.FC = () => {
  const [pacientes, setPacientes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const userRol = 2;

  // Llamada a la API para obtener todos los pacientes
  useEffect(() => {
    const fetchPacientes = async () => {
      setLoading(true); // Comienza el estado de carga
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/${userRol}` // Cambia la URL según tu configuración
        );
        const data = await response.json();

        if (data.success) {
          setPacientes(data.users); // Guardar todos los pacientes en el estado
        } else {
          setError("No se encontraron pacientes.");
        }
      } catch (error) {
        setError("Ocurrió un error al obtener los pacientes.");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchPacientes();
  }, []);

  return (
    <div className="flex h-[calc(100vh-100px)]">
      <div className="w-[28%] bg-white p-4 flex flex-col justify-between">
        <div className="flex flex-col items-center mb-2">
          <input
            type="text"
            placeholder="Buscar paciente"
            className="w-full max-w-xs p-2 border border-gray-300 rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <button className="py-1 mb-8 px-4 w-full max-w-xs bg-[#E8EDF2] rounded-xl hover:bg-gray-300 text-gray-800">
            Buscar
          </button>
        </div>
      </div>

      <div className="w-[72%] bg-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Pacientes</h1>
        </div>

        <div className="pt-8">
          {loading ? (
            <p>Cargando pacientes...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : pacientes.length > 0 ? (
            pacientes.map((paciente) => (
              <Paciente
                key={paciente.CC}
                cc={paciente.CC}
                profileImage={USER_IMAGE}
                name={`${paciente.nombreUsuario} ${paciente.apellidoUsuario}`}
                emailUsuario={paciente.emailUsuario}
                gender={""}
                age={""}
              />
            ))
          ) : (
            <p>No hay pacientes disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buscar;