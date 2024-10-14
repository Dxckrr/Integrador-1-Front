import LOGO from "../../../assets/img/logos/LogoSanavit(Mediana).png"
import { adminNavigation } from "../../../utils/navLinks.routes";
import SideBarButtonsDropDown from "../admin/SideBarButtonsDropDown"
import SideBarButton from "./SideBarButton";
import { useState } from 'react';
import { DocumentMagnifyingGlassIcon, ChartBarIcon, UserPlusIcon, PencilSquareIcon, CurrencyDollarIcon , PresentationChartBarIcon } from '@heroicons/react/24/solid';

/**
 * Contains the side menu of the admin options
 * @returns {Component} SideBar
 */
type SvgIconKey = string;

const svgIcons: Record<SvgIconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    'Registrar usuarios': UserPlusIcon,
    'Modificar usuarios': PencilSquareIcon,
    'Consultar información': DocumentMagnifyingGlassIcon,
    'Finanzas': CurrencyDollarIcon,
    'Encuesta de satisfacción': ChartBarIcon,
    'Estadísticas': PresentationChartBarIcon
};

const SideBarAdmin = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="h-screen w-80 bg-white shadow-2xl pt-8 left-0 z-20">
            <div className="flex items-center justify-center mb-14">
                <img src={LOGO} alt="Logo" className="h-20"/>
            </div>
            <nav className="flex flex-col mt-10 space-y-5 px-5">
                <div>
                    <label className="text-base text-gray-400 pl-3">Gestión de usuarios</label>
                    <hr className="border-gray-300 mb-3"></hr>
                    {adminNavigation.slice(0, 3).map((item, i) => (
                        <SideBarButtonsDropDown
                            name={item.name}
                            Icon={svgIcons[item.name]}
                            subItems={item.subRef}
                            key={i} 
                        />
                    ))}
                </div>
                <div>
                    <label className="text-base text-gray-400 pl-3">Gestión IPS</label>
                    <hr className="border-gray-300 mb-3"></hr>
                    {adminNavigation.slice(3, 6).map((item, i) => (
                        <SideBarButton 
                        linkto={item.href} 
                        name={item.name} 
                        Icon={svgIcons[item.name]}
                        key={i}
                        />
                    ))}
                </div>
            </nav>
        </div>
    )
}
export default SideBarAdmin