import React from "react";
import Paciente from "../../especialista_components/PacienteComponent";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";

const Buscar: React.FC = () => {
  const appointments = [
    {
      cc: 1234567890,
      name: "Pepito Perez",
      gender: "pansexual",
      age: "69 Años",
    },
    {
      cc: 9876543210,
      name: "Juanita Gomez",
      gender: "femenino",
      age: "35 Años",
    },
  ];

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
          {appointments.map((appointment) => (
            <Paciente
              key={appointment.cc}
              cc={appointment.cc}
              profileImage={USER_IMAGE}
              name={appointment.name}
              gender={appointment.gender}
              age={appointment.age}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buscar;
