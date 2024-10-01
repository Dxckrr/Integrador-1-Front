import React, { useState, useEffect } from "react";
import { TabComponent, DetallesComponent } from "../../especialista_components";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";
import { useLocation } from "react-router-dom";

const DetallesPaciente: React.FC = () => {
  const location = useLocation();
  const { paciente } = location.state;

  const [selectedOption, setSelectedOption] = useState("Información paciente");
  const [ordenesMedicas, setOrdenesMedicas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const specialist = {
    name: "Dr. Juan Rodriguez",
    specialty: "Cardiología",
  };

  const renderEstadoUsuario = (estado: number) => {
    return estado === 1 ? "Activo" : "Inactivo";
  };

  const medicalHistoryDetails = [
    {
      labelLeft: "Identificación de usuario",
      valueLeft: paciente.CC,
      labelRight: "Email",
      valueRight: paciente.emailUsuario,
    },
    {
      labelLeft: "Nombre(s)",
      valueLeft: paciente.nombreUsuario,
      labelRight: "Apellido(s)",
      valueRight: paciente.apellidoUsuario,
    },
    {
      labelLeft: "Sede",
      valueLeft: paciente.idSede || "N/A",
      labelRight: "Rol",
      valueRight: paciente.idRol || "N/A",
    },
    {
      labelLeft: "Especialidad",
      valueLeft: paciente.idEspecialidad || "N/A",
      labelRight: "Hoja de vida",
      valueRight: paciente.idHoja_Vida || "N/A",
    },
    {
      labelLeft: "Tipo de paciente",
      valueLeft: paciente.idTipoPaciente || "N/A",
      labelRight: "Estado",
      valueRight: renderEstadoUsuario(paciente.estadoUsuario),
    },
  ];

  useEffect(() => {
    if (selectedOption === "Ordenes") {
      const fetchOrdenesMedicas = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `http://localhost:3000/api/orders/ordenes-medicas-paciente/${paciente.CC}`
          );
          const data = await response.json();
          setOrdenesMedicas(data);
        } catch (error) {
          console.error("Error fetching medical orders:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchOrdenesMedicas();
    }
  }, [selectedOption, paciente.CC]);

  const renderDetails = () => {
    switch (selectedOption) {
      case "Información paciente":
        return (
          <div>
            <DetallesComponent
              title="Detalles personales"
              details={medicalHistoryDetails}
            />
          </div>
        );
      case "Ordenes":
        return (
          <div className="grid grid-cols-1 gap-6">
            {loading ? (
              <p className="text-center text-indigo-600">
                Cargando órdenes médicas...
              </p>
            ) : ordenesMedicas.length > 0 ? (
              ordenesMedicas.map((orden) => (
                <div
                  key={orden.idOrden_Medica}
                  className="border border-gray-300 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    Diagnóstico:{" "}
                    <span className="font-normal text-gray-700">
                      {orden.diagnostico}
                    </span>
                  </h4>
                  <p className="mb-2 text-gray-600">
                    <strong>Órdenes:</strong> {orden.ordenes}
                  </p>
                  <p className="mb-2 text-gray-600">
                    <strong>Recomendaciones:</strong> {orden.recomendaciones}
                  </p>
                  <p className="mb-2 text-gray-600">
                    <strong>Estado:</strong>{" "}
                    {orden.estadoOM === 1 ? "Activo" : "Inactivo"}
                  </p>
                  <p className="text-gray-600">
                    <strong>Fecha:</strong>{" "}
                    {new Date(orden.fecha).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No hay órdenes médicas disponibles.
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-grow">
        {/* Columna izquierda para la información del especialista */}
        <div className="w-[28%] bg-white p-6 flex flex-col justify-between shadow-md h-full rounded-lg">
          <div className="flex items-center mb-6">
            <img
              src={USER_IMAGE}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-indigo-500 p-1 mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-indigo-600">
                Especialista
              </h3>
              <p className="text-gray-600">{specialist.specialty}</p>
              <p className="text-gray-600">{specialist.name}</p>
            </div>
          </div>
        </div>

        {/* Columna principal para la información del paciente */}
        <div className="w-[72%] bg-white p-4 flex flex-col h-full rounded-lg shadow-md">
          {/* Información del paciente en la parte superior */}
          <div className="text-center mt-4">
            <div className="flex flex-col items-center">
              <img
                src={paciente.imagen || USER_IMAGE}
                alt="Paciente"
                className="w-28 h-28 rounded-full border-2 border-indigo-500 mb-2"
              />
              <p className="text-xl font-medium text-indigo-600">{`${paciente.nombreUsuario} ${paciente.apellidoUsuario}`}</p>
              <p className="text-gray-600">
                {paciente.genero || "Género desconocido"}
              </p>
            </div>
          </div>

          {/* Componente de pestañas */}
          <TabComponent
            options={["Información paciente", "Ordenes"]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          {/* Detalles según la pestaña seleccionada */}
          <div className="pt-4 flex-grow overflow-y-auto">
            {renderDetails()}
          </div>
        </div>
      </div>
      <div className="bg-white pb-10"></div>
    </div>
  );
};

export default DetallesPaciente;
