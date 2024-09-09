import React, { useState } from "react";
import TabComponent from "../../especialista_components/TabComponent";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";

const Citas: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");

  const appointments = [
    {
      id: 1,
      date: "23 de julio, 10:00 am - 10:15 am",
      type: "Consulta general",
      duration: "15 minutos",
    },
    {
      id: 2,
      date: "24 de julio, 11:00 am - 11:30 am",
      type: "Consulta especializada",
      duration: "30 minutos",
    },
  ];

  return (
    <div className="px-56 pt-16 mb-48">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">Citas</h1>
      </div>

      <TabComponent
        options={["Hoy", "Mañana", "Esta semana", "Este mes", "Todos"]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <div className="pt-8">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center space-x-4 py-4 border-b border-[#D1DBE5] hover:bg-gray-100 transition"
          >
            <img
              src={USER_IMAGE}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg">{appointment.date}</p>
              <p className="text-sm text-gray-500">
                {appointment.type}, {appointment.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citas;
