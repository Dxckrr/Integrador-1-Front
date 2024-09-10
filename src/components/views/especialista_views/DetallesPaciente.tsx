import React, { useState } from "react";
import { TabComponent, DetallesComponent } from "../../especialista_components";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";

import { Link } from "react-router-dom";

interface Detail {
  labelLeft: string;
  valueLeft: string;
  labelRight: string;
  valueRight: string;
}

const DetallesPaciente: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Historia médica");

  const specialist = {
    name: "Dr. Juan Rodriguez",
    specialty: "Cardiología",
  };

  const patient = {
    name: "Pepito Perez",
    gender: "Hombre",
    age: "69 Años",
  };

  const medicalHistoryDetails: Detail[] = [
    {
      labelLeft: "Identificación de usuario",
      valueLeft: "000789",
      labelRight: "Email",
      valueRight: "example@example.com",
    },
    {
      labelLeft: "Nombre(s)",
      valueLeft: "Pepito",
      labelRight: "Apellido(s)",
      valueRight: "Perez",
    },
    {
      labelLeft: "Tipo de Identificacion",
      valueLeft: "cc",
      labelRight: "Numero de identificacion",
      valueRight: "123456789",
    },
    {
      labelLeft: "Telefono celular",
      valueLeft: "3000000000",
      labelRight: "Estrato",
      valueRight: "8",
    },
    {
      labelLeft: "Eps Afiliada",
      valueLeft: "UPB eps",
      labelRight: "Regimen",
      valueRight: "Privado",
    },
  ];

  const AntecedentesDetails: Detail[] = [
    {
      labelLeft: "Perinitales",
      valueLeft: "n/a",
      labelRight: "Patologicos",
      valueRight: "n/a",
    },
    {
      labelLeft: "Medicamentos",
      valueLeft: "n/a",
      labelRight: "Quirurjicos",
      valueRight: "n/a",
    },
    {
      labelLeft: "Traumatismos",
      valueLeft: "n/a",
      labelRight: "Vacunas",
      valueRight: "n/a",
    },
    {
      labelLeft: "Alergias",
      valueLeft: "n/a",
      labelRight: "Familiares",
      valueRight: "n/a",
    },
  ];

  const notesDetails: [] = [];
  const ordersDetails: [] = [];

  const renderDetails = () => {
    switch (selectedOption) {
      case "Historia médica":
        return (
          <div>
            <DetallesComponent
              title="Detalles personales"
              details={medicalHistoryDetails}
            />

            <DetallesComponent
              title="Antecedentes"
              details={AntecedentesDetails}
            />
          </div>
        );
      case "Notas":

      case "Ordenes":

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex flex-grow">
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

        <div className="w-[72%] bg-white p-4 flex flex-col">
          <div className="flex flex-col items-end mb-4 space-y-2">
            <Link to="../ordenMedica">
              <button className="bg-[#0F6AEF] text-white px-10 py-1 text-sm rounded-md hover:bg-blue-800">
                Crear Orden
              </button>
            </Link>
            <Link to="../historiaClinica">
              <button className="bg-[#0F6AEF] text-white px-10 py-1 text-sm rounded-md hover:bg-blue-800">
                Historia Clinica
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center mt-12">
            <img
              src={USER_IMAGE}
              alt="Patient Profile"
              className="w-36 h-36 rounded-md"
            />
            <div className="text-center mt-4">
              <p className="text-xl font-medium">{patient.name}</p>
              <p className="text-gray-600">
                {patient.gender}, {patient.age}
              </p>
            </div>
          </div>

          <TabComponent
            options={["Historia médica", "Notas", "Ordenes"]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <div className="pt-4 flex-grow">{renderDetails()}</div>
        </div>
      </div>
      <div className="bg-white pb-10"></div>{" "}
    </div>
  );
};

export default DetallesPaciente;
