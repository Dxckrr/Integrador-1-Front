import { operatorNavigation } from "../../../utils/navLinks.routes";
import ActionCard from "../../ui/operator/ActionCard";
import SideBar from "../../ui/operator/SidebarOperator"
import { Outlet, useLocation } from "react-router-dom";

/**
 
Contains the main page of the operator user
@returns {Component} ManagementPanel
*/
const ManagementPanel = () => {
    const location = useLocation();
    const isMainRoute = location.pathname === "/management";

    return (
        <>
            <div className="flex min-h-screen bg-gradient-to-b from-white to-[#EFF0F1]">
                <div className="fixed top-0 left-0 h-full w-60 bg-gray-800">
                    <SideBar />
                </div>
                <div className="flex-1 ml-60">
                    <Outlet/>
                    {isMainRoute && (
                        <div className="ml-32 p-16 min-h-screen ">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold mb-2">Bienvenido al módulo de Operador</h1>
                                <span className="text-lg">La medicina musculoesquelética es la clave para una vida activa y saludable.</span>
                                <br />
                                <span className="text-lg">Como operador, estás al frente de la atención médica que mejora vidas todos los días. ¡Toma acción rápidamente y asegura que cada paciente reciba el cuidado que merece!</span>
                            </div>
                            <div className="flex flex-col gap-6 w-4/5">
                                <ActionCard title="Urgencias" color="bg-gradient-to-r from-red-600 to-red-500" href={operatorNavigation[0].href} />
                                <ActionCard title="Agendar Cita" color="bg-gradient-to-r from-blue-700 to-secondary-blue" href={operatorNavigation[1].href} />
                                <ActionCard title="Gestionar Pacientes" color="bg-gradient-to-r from-primary-blue to-blue-700" href={operatorNavigation[5].href} />
                                <ActionCard title="Autorizaciones" color="bg-gradient-to-r from-blue-700 to-secondary-blue" href={operatorNavigation[4].href} />
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    )
}
export default ManagementPanel