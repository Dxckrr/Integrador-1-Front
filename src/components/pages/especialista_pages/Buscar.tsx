import React, { useEffect, useState } from "react";
import Paciente from "../../especialista_components/PacienteComponent";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";
import { useNavigate } from "react-router-dom"; // Importar el hook para navegar

const Buscar: React.FC = () => {
  const [pacientes, setPacientes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCC, setSearchCC] = useState<string>("");

  const userRol = 2;
  const navigate = useNavigate(); // Instanciar el hook

  const fetchPacientes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${userRol}`
      );
      const data = await response.json();
      if (data.success) {
        setPacientes(data.users);
        setError(null);
      } else {
        setError("No se encontraron pacientes.");
      }
    } catch (error) {
      setError("Ocurrió un error al obtener los pacientes.");
    } finally {
      setLoading(false);
    }
  };

  const buscarPacientePorCC = async () => {
    if (!searchCC) {
      fetchPacientes();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/user/${searchCC}`
      );
      const data = await response.json();

      if (data.success && data.user.idRol === 2) {
        setPacientes([data.user]);
        setError(null);
      } else {
        setPacientes([]);
        setError("El paciente no tiene el rol adecuado o no fue encontrado.");
      }
    } catch (error) {
      setError("Ocurrió un error al buscar el paciente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  // Función para manejar el clic en un paciente
  const handlePacienteClick = (paciente: any) => {
    navigate("/especialista/detalles-paciente", { state: { paciente } }); // Navegar a la página de detalles y pasar los datos del paciente
  };

  return (
    <div className="flex h-[calc(100vh-100px)]">
      <div className="w-[28%] bg-white p-4 flex flex-col justify-between">
        <div className="flex flex-col items-center mb-2">
          <input
            type="text"
            placeholder="Buscar paciente por CC"
            className="w-full max-w-xs p-2 border border-gray-300 rounded-xl"
            value={searchCC}
            onChange={(e) => setSearchCC(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="py-1 mb-8 px-4 w-full max-w-xs bg-[#E8EDF2] rounded-xl hover:bg-gray-300 text-gray-800"
            onClick={buscarPacientePorCC}
          >
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
              <div
                key={paciente.CC}
                onClick={() => handlePacienteClick(paciente)}
              >
                <Paciente
                  cc={paciente.CC}
                  profileImage={USER_IMAGE}
                  name={`${paciente.nombreUsuario} ${paciente.apellidoUsuario}`}
                  emailUsuario={paciente.emailUsuario}
                  gender={""}
                  age={""}
                />
              </div>
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
