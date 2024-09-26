import React, { useState } from "react";
import { TabComponent, DetallesComponent } from "../../especialista_components";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";
import { useLocation } from "react-router-dom";

interface Detail {
  labelLeft: string;
  valueLeft: string;
  labelRight: string;
  valueRight: string;
}

const DetallesPaciente: React.FC = () => {
  const location = useLocation();
  const { paciente } = location.state;

  const [selectedOption, setSelectedOption] = useState("Información paciente");

  const specialist = {
    name: "Dr. Juan Rodriguez",
    specialty: "Cardiología",
  };

  // Función para mostrar estado del usuario
  const renderEstadoUsuario = (estado: number) => {
    return estado === 1 ? "Activo" : "Inactivo";
  };

  // Detalles médicos y personales del paciente
  const medicalHistoryDetails: Detail[] = [
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
      labelLeft: "Edad",
      valueLeft: paciente.edad || "N/A",
      labelRight: "Género",
      valueRight: paciente.genero || "N/A",
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
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-grow">
        {/* Columna izquierda para la información del especialista */}
        <div className="w-[28%] bg-white p-6 flex flex-col justify-between">
          <div className="flex items-center">
            <img
              src={USER_IMAGE}
              alt="Profile"
              className="w-24 h-24 rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">Especialista</h3>
              <p className="text-gray-600">{specialist.specialty}</p>
              <p className="text-gray-600">{specialist.name}</p>
            </div>
          </div>
        </div>

        {/* Columna principal para la información del paciente */}
        <div className="w-[72%] bg-white p-4 flex flex-col">
          {/* Información del paciente en la parte superior */}
          <div className="text-center mt-4">
            <div className="flex flex-col items-center">
              <img
                src={paciente.imagen || USER_IMAGE}
                alt="Paciente"
                className="w-28 h-28 rounded-full mb-2"
              />
              <p className="text-xl font-medium">{`${paciente.nombreUsuario} ${paciente.apellidoUsuario}`}</p>
              <p className="text-gray-600">{`Edad: ${
                paciente.edad || "N/A"
              }`}</p>
              <p className="text-gray-600">
                {paciente.genero || "Género desconocido"}
              </p>
            </div>
          </div>

          {/* Componente de pestañas */}
          <TabComponent
            options={["Información paciente", "Notas", "Ordenes"]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          {/* Detalles según la pestaña seleccionada */}
          <div className="pt-4 flex-grow">{renderDetails()}</div>
        </div>
      </div>
      <div className="bg-white pb-10"></div>
    </div>
  );
};

export default DetallesPaciente;
