import { operatorNavigation } from "../../../utils/navLinks.routes";
import { Link } from "react-router-dom";

const buttonClass = "bg-white px-4 py-4 m-5 rounded-2xl shadow-customButton w-1/4 hover:bg-aux-1-yellow text-2xl flex flex-col h-fit text-left";

const OperatorEmergencies = () => {
    return (
      <>
        <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1]">
          <div className="h-full w-4/5">
            <div className="flex justify-center mt-10">
              <h1 className="font-bold text-2xl">Gestionar pacientes</h1>
            </div>
            <div className="m-5 text-base">
              <span>Desde este módulo, podrás gestionar todos los aspectos relacionados con los pacientes. Registra, consulta y actualiza información de manera rápida y sencilla, asegurando que todos los datos estén siempre actualizados.</span>
            </div>

            <div className="mt-10">
                {/* Registrar pacientes */}
                <Link to={operatorNavigation[6].href} className={`${buttonClass}`}>
                    {operatorNavigation[6].name}
                    <span className="text-base mt-1">Añade nuevos pacientes al sistema.</span>
                </Link>
                {/* Consultar información */}
                <Link to={operatorNavigation[7].href} className={`${buttonClass}`}>
                    {operatorNavigation[7].name}
                    <span className="text-base mt-1">Accede rápidamente a la información detallada de los pacientes.</span>
                </Link>
                {/* Modificar pacientes */}
                <Link to={operatorNavigation[8].href} className={`${buttonClass}`}>
                    {operatorNavigation[8].name}
                    <span className="text-base mt-1">Actualiza o corrige la información de los pacientes.</span>
                </Link>
            </div>
          </div>
        </main>
      </>
    );
  };
  export default OperatorEmergencies;