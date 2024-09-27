import LOGO from "../../../assets/img/logos/LogoSanavit(Mediana).png"
import { operatorNavigation } from "../../../utils/navLinks.routes"
import { ExclamationTriangleIcon, PaperClipIcon, ArrowPathRoundedSquareIcon, XMarkIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import SideBarButton from "./SideBarButton";

/**
 * Contains the side menu of the operator options
 * @returns {Component} SideBar
 */

const link = "font-normal text-lg px-6 py-2 hover:bg-gray-200 flex items-center"
type SvgIconKey = string;
const svgIcons: Record<SvgIconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    'Urgencias': ExclamationTriangleIcon,
    'Agendamiento de Citas': PaperClipIcon,
    'Reagendamiento de citas': ArrowPathRoundedSquareIcon,
    'Cancelación de citas': XMarkIcon,
    'Autorización de órdenes': ShieldCheckIcon,
    'Gestionar pacientes': UserGroupIcon
};

const SideBarOperator = () => {
    return (
        <div className="h-screen w-80 bg-white shadow-2xl pt-8 left-0 z-20">
            <div className="flex items-center justify-center mb-14">
                <img src={LOGO} alt="Logo" className="h-20"/>
            </div>
            <nav className="flex flex-col space-y-6">
                {operatorNavigation.slice(0, 6).map((item, i) => (
                    <SideBarButton 
                        linkto={item.href} 
                        name={item.name} 
                        Icon={svgIcons[item.name]}
                        key={i}
                    />
                ))}
            </nav>
        </div>
    )
}
export default SideBarOperator