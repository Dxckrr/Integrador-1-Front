interface Appointment {
  idCita: number;
  dia: Date;
  hora: string;
  estadoCita: boolean;
  idServicio: number;
  idHistoria_Medica: number;
  idUsuarioCC: string;
  idDocCC: string;
}

interface User {
  CC: string;
  nombreUsuario: string;
  apellidoUsuario: string;
  emailUsuario: string;
  pwdUsuario: string;
  idSede?: number;
  idRol: number;
  estadoUsuario?: boolean;
  idEspecialidad?: number;
  idHoja_Vida?: number;
  idTipoPaciente?: number;
}

const ModalComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  appointment: Appointment | null;
  userInfo: User | null;
  doctorInfo: User | null;
}> = ({ isOpen, onClose, appointment, userInfo, doctorInfo }) => {
  if (!isOpen || !appointment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-xl font-bold">Detalles de la Cita</h2>

        {/* Información del usuario (paciente) */}
        {userInfo && (
          <div>
            <h3 className="font-bold mt-4">Paciente:</h3>
            <p>
              Nombre: {userInfo.nombreUsuario} {userInfo.apellidoUsuario}
            </p>
            <p>Identificación: {userInfo.CC}</p>
            <p>Email: {userInfo.emailUsuario}</p>
            <p>
              Tipo De Paciente: {userInfo.idTipoPaciente || "No disponible"}
            </p>
          </div>
        )}

        {/* Información del doctor */}
        {doctorInfo && (
          <div>
            <h3 className="font-bold mt-4">Doctor:</h3>
            <p>
              Nombre: {doctorInfo.nombreUsuario} {doctorInfo.apellidoUsuario}
            </p>
            <p>Identificación: {doctorInfo.CC}</p>
            <p>Email: {doctorInfo.emailUsuario}</p>
            <p>
              Especialidad: {doctorInfo.idEspecialidad || "No especificada"}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => console.log("Crear Orden")}
          >
            Crear Orden
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => console.log("Crear Historia Médica")}
          >
            Crear Historia Médica
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => console.log("Finalizar Cita")}
          >
            Finalizar Cita
          </button>
        </div>

        <button
          className="mt-6 bg-gray-300 text-gray-800 py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
