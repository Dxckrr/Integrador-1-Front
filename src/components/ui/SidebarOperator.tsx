import LOGO from "../../assets/img/logos/LogoSanavit(Mediana).png"
import { operatorNavigation } from "../../utils/navLinks.routes"
import { Link } from "react-router-dom";

/**
 * Contains the side menu of the operator options
 * @returns {Component} SideBar
 */

const link = "font-normal text-xl px-6 py-2 hover:bg-gray-200"

const SideBarOperator = () => {
    
    return (
        <div className="h-screen w-64 bg-white shadow-2xl pt-8 left-0 z-20">
            <div className="flex items-center justify-center mb-14">
                <img src={LOGO} alt="Logo" className="h-20"/>
            </div>
            <nav className="flex flex-col mt-10 space-y-8">
                <Link to={operatorNavigation[0].href} className={`${link}`}>
                    {operatorNavigation[0].name}
                </Link>
                <Link to={operatorNavigation[1].href} className={`${link}`}>
                    {operatorNavigation[1].name}
                </Link>
                <Link to={operatorNavigation[2].href} className={`${link}`}>
                    {operatorNavigation[2].name}
                </Link>
                <Link to={operatorNavigation[3].href} className={`${link}`}>
                    {operatorNavigation[3].name}
                </Link>
                <Link to={operatorNavigation[4].href} className={`${link}`}>
                    {operatorNavigation[4].name}
                </Link>
                <Link to={operatorNavigation[5].href} className={`${link}`}>
                    {operatorNavigation[5].name}
                </Link>
            </nav>
        </div>
    )
}
export default SideBarOperator