import LOGO from "../../../assets/img/logos/LogoSanavit(Mediana).png"
import { adminNavigation } from "../../../utils/navLinks.routes";
import SideBarButtonsDropDown from "../admin/SideBarButtonsDropDown"
import SideBarButton from "./SideBarButton";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { DocumentMagnifyingGlassIcon, ChartBarIcon, UserPlusIcon, PencilSquareIcon, CurrencyDollarIcon, PresentationChartBarIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';

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
        <div className="h-screen w-80 bg-white shadow-2xl pt-8 left-0 z-20 flex flex-col justify-between">
            <div>
                <Link to="/admin">
                    <div className="flex items-center justify-center mb-14">
                        <img src={LOGO} alt="Logo" className="h-20" />
                    </div>
                </Link>
                <nav className="flex flex-col mt-10 space-y-5 px-5">
                    <div>
                        <label className="text-base text-gray-400 pl-3">Gestión de usuarios</label>
                        <hr className="border-gray-300 mb-3" />
                        {adminNavigation.slice(0, 2).map((item, i) => (
                            <SideBarButtonsDropDown
                                name={item.name}
                                Icon={svgIcons[item.name]}
                                subItems={item.subRef}
                                key={i}
                            />
                        ))}
                        <SideBarButton
                            linkto={adminNavigation[2].href}
                            name={adminNavigation[2].name}
                            Icon={svgIcons[adminNavigation[2].name]}
                            key={2}
                        />
                        
                    </div>
                    <div>
                        <label className="text-base text-gray-400 pl-3">Gestión IPS</label>
                        <hr className="border-gray-300 mb-3" />
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
            <div>
                <hr className="border-gray-300 mb-3 mx-5"></hr>
                <Link to='/' className="w-5/6 px-3 mx-3 hover:bg-gray-200 flex flex-row text-lg items-center py-1 mb-6 rounded-xl">
                    <ArrowLeftStartOnRectangleIcon className="size-6 mr-2"/>
                    Salir
                </Link>
            </div>
        </div>
    );
};

export default SideBarAdmin;
