import { Link } from "react-router-dom";

const ActionCard = ({ title, color, href }) => {
    return (
        <Link to={href} >

            <div className={`${color} text-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer`}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <p className="text-sm opacity-80">Haga clic para acceder</p>
            </div>
            
        </Link>
    )
};
  
export default ActionCard;