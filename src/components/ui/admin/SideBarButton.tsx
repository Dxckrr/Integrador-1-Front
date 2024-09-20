import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SideBarButtonProps {
    linkto: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
}

const SideBarButtons: React.FC<SideBarButtonProps> = ({linkto, Icon, name}) => {
    const location = useLocation();
    const isActive = location.pathname === linkto;
    const [hover, setHover] = useState<string>()
    const handleToDo = (nameItem : string) => {
        setHover(nameItem)
    }
    return (
        <Link to={linkto} 
        className={`font-normal text-base py-1 pl-2 my-2 flex flex-row items-center rounded-md ${
            isActive ? "bg-primary-blue text-white" : "hover:bg-gray-100 text-black"
            } ${hover === name && !isActive ? "hover:bg-gray-100" : ""}`}
            onClick={() => handleToDo(name)}
        >
            {Icon ? (
                <Icon className="size-5" /> // Renderiza el ícono si está presente
            ) : (
                <div/> // Renderiza un div vacío si no hay ícono
            )}
            {/* <img className="size-5" src={svg}/> */}
            <span className="pl-3">{name}</span>
        </Link>
    )
}

export default SideBarButtons