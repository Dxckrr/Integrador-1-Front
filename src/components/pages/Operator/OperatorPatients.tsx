import { operatorNavigation } from "../../../utils/navLinks.routes";
import { Link } from "react-router-dom";

/** bg-gradient-to-r from-white to-[#EFF0F1]
 * This section contains tha main page
 * @returns {Component} Dashboard
 */

const buttonClass = "bg-slate-50 px-4 py-2 m-5 text-xl rounded-full shadow-lg hover:bg-aux-1-yellow"

const OperatorEmergencies = () => {
    return (
      <>
        <main className="h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
          <div className="h-full w-4/5">
            <div className="flex justify-center">
              <h1 className="font-bold text-2xl mr-">Gestionar pacientes</h1>
            </div>

            <div className="mt-10">
                {/* Registrar pacientes */}
                <Link to={operatorNavigation[6].href} className={`${buttonClass}`}>
                    {operatorNavigation[6].name}
                </Link>
                {/* Consultar información */}
                <Link to={operatorNavigation[7].href} className={`${buttonClass}`}>
                    {operatorNavigation[7].name}
                </Link>
            </div>
          </div>
        </main>
      </>
    );
  };
  export default OperatorEmergencies;