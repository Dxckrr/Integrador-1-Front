import SideBar from "../../ui/admin/SideBarAdmin"
import { Link, Outlet, useLocation } from "react-router-dom";

/**
 
Contains the main page of the operator user
@returns {Component} ManagementPanel
*/
const ManagementPanel = () => {
    const location = useLocation();
    const isMainRoute = location.pathname === "/admin";
    
    return (
        <>
            <div className="flex h-screen bg-gradient-to-b from-white to-[#EFF0F1]">
                <div className="fixed top-0 left-0 h-full w-60 bg-gray-800">
                    <SideBar/>
                </div>
                <div className="flex-1 ml-80">
                    <Outlet/>
                    {isMainRoute && (
                        <div className="min-h-screen bg-gray-100 p-6 pt-20">
                            <div className="max-w-7xl mx-auto">
                                <h1 className="text-3xl font-bold mb-6 text-gray-800">Bienvenido al módulo de Administración Sanavit</h1>
                                
                                <div className="mb-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Buscar funciones..."
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {quickAccessItems.map((item, index) => (
                                        <Link to={item.link}>
                                            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                                                <div className="flex justify-between">
                                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                                    <div className="flex items-center justify-center w-6 h-6 mb-4 rounded-full bg-blue-100">
                                                        <svg className="size-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>

    )
}
export default ManagementPanel


const quickAccessItems = [
    { title: "Ver pacientes", description: "Consulte la información de los pacientes de la IPS.", link:"/admin/consultar-paciente" },
    { title: "Modificar usuarios", description: "Modifique la información de los pacientes y empleados.", link:"/admin/modificar-paciente" },
    { title: "Registrar médicos", description: "Añada nuevos especialistas al sistema.", link:"/admin/registrar-medico" },
    { title: "Encuesta de Satisfacción", description: "Analice el feedback de los pacientes y el personal", link:"/admin/encuesta-satisfaccion" },
    { title: "Finanzas y Facturación", description: "Gestione aspectos financieros y facturación.", link:"/admin/finanzas" },
    { title: "Informes y Estadísticas", description: "Acceda y genere informes detallados y estadísticas.", link:"/admin/estadisticas" },
];