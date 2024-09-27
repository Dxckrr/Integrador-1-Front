import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SideBarButtonProps {
    linkto: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({linkto, Icon, name}) => {
    const location = useLocation();
    const isActive = location.pathname === linkto;
    const [hover, setHover] = useState<string>()
    const handleToDo = (nameItem : string) => {
        setHover(nameItem)
    }
    return (
        <Link to={linkto} 
        className={`font-normal text-lg py-2 flex flex-row items-center px-6 ${
            isActive ? "bg-primary-blue text-white" : "hover:bg-gray-100 text-black"
            } ${hover === name && !isActive ? "hover:bg-gray-100" : ""}`}
            onClick={() => handleToDo(name)}
        >
            {Icon ? (
                <Icon className="size-6" /> // Renderiza el ícono si está presente
            ) : (
                <div/> // Renderiza un div vacío si no hay ícono
            )}
            <span className="pl-3">{name}</span>
        </Link>
    )
}

export default SideBarButton