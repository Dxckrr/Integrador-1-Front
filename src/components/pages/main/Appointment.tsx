import { Outlet, useLocation } from "react-router-dom";
import LOGO_IPS from "../../../assets/img/logos/LogoSanavit(Pequeño).png";

const Appointment = () => {
  const location = useLocation(); //To get /url and compare 

  return (
    <>
      {location.pathname !== "/citas" ? (
        <Outlet />
      ) : (
        <main className="w-full flex flex-col items-center">
          <header>
            <img className="w-auto h-5/6" src={LOGO_IPS} alt="Logo" />
          </header>
          <div className="shadow-2xl px-40 py-20 flex flex-col items-center justify-center mt-10 bg-[#F4F4F4] rounded-2xl">
            <h1 className="text-dark-blue font-bold text-5xl">
              Gestión de citas
            </h1>
            <p className="text-lg mb-8 mt-2">¿Qué desea hacer?</p>
            <div className="flex flex-row gap-x-12 text-xl">
              <a
                href="citas/agendar"
                className="bg-primary-blue py-3 px-8 rounded-2xl text-white">
                Agendar Cita
              </a>
              <a
                href="citas/reagendar"
                className="bg-primary-blue py-3 px-8 rounded-2xl text-white">
                Reagendar Cita
              </a>
              <a
                href="citas/cancelar"
                className="bg-primary-blue py-3 px-8 rounded-2xl text-white">
                Cancelar Cita
              </a>
            </div>
            <aside className="mt-16">
              <a
                href="/"
                className="bg-red-500 text-white py-1 px-8 rounded-xl">
                Salir
              </a>
            </aside>
          </div>
        </main>
      )}
    </>
  );
};

export default Appointment;
