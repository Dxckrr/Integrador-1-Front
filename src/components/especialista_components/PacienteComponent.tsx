import React from "react";
import { Link } from "react-router-dom";

interface PacienteProps {
  cc: number;
  profileImage: string;
  name: string;
  gender: string;
  age: string;
  emailUsuario: string;
}

const Paciente: React.FC<PacienteProps> = ({
  cc,
  profileImage,
  name,
  emailUsuario,
  age,
}) => {
  return (
    <Link
      to={`/especialista/detallesDelPaciente/${cc}`} // Pass the CC as a URL parameter
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
          {age}, {emailUsuario}, {cc}
        </p>
      </div>
    </Link>
  );
};

export default Paciente;
