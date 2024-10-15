import LOGO from "../../../assets/img/logos/LogoSanavit(Mediana).png"
import { operatorNavigation } from "../../../utils/navLinks.routes"
import { CalendarIcon, ExclamationTriangleIcon, ArrowPathRoundedSquareIcon, XMarkIcon, ShieldCheckIcon, UserGroupIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import SideBarButton from "./SideBarButton";
import { Link } from "react-router-dom";

/**
 * Contains the side menu of the operator options
 * @returns {Component} SideBar
 */

const link = "font-normal text-lg px-6 py-2 hover:bg-gray-200 flex items-center"
type SvgIconKey = string;
const svgIcons: Record<SvgIconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    'Urgencias': ExclamationTriangleIcon,
    'Agendamiento de Citas': CalendarIcon,
    'Reagendamiento de citas': ArrowPathRoundedSquareIcon,
    'Cancelación de citas': XMarkIcon,
    'Autorización de órdenes': ShieldCheckIcon,
    'Gestionar pacientes': UserGroupIcon
};

const SideBarOperator = () => {
    return (
        <div className="h-screen w-80 bg-white shadow-2xl pt-8 left-0 z-20 flex flex-col">
            <Link to="/management">
                <div className="flex items-center justify-center mb-14">
                    <img src={LOGO} alt="Logo" className="h-20" />
                </div>
            </Link>
            <nav className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col space-y-6">
                    {operatorNavigation.slice(0, 6).map((item, i) => (
                        <SideBarButton
                            linkto={item.href}
                            name={item.name}
                            Icon={svgIcons[item.name]}
                            key={i}
                        />
                    ))}
                </div>
                <div>
                    <hr className="border-gray-300 mb-3 mx-5"></hr>
                    <button className="w-28 px-3 mx-3 hover:bg-gray-200 flex text-lg items-center py-2 mb-6 rounded-xl">
                        <ArrowLeftStartOnRectangleIcon className="size-6 mr-2"/>
                        Salir
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default SideBarOperator;
