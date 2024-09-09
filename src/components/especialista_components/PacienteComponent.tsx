import React from "react";

interface PacienteProps {
  cc: number;
  profileImage: string;
  name: string;
  gender: string;
  age: string;
}

const Paciente: React.FC<PacienteProps> = ({
  cc,
  profileImage,
  name,
  gender,
  age,
}) => {
  return (
    <a
      href="detallesdelpaciente"
      className="flex items-center space-x-4 py-4 border-b border-[#D1DBE5] hover:bg-gray-100 transition"
    >
      <img
        src={profileImage}
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-gray-500">
          {age}, {gender}, {cc}
        </p>
      </div>
    </a>
  );
};

export default Paciente;
