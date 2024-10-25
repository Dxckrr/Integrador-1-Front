import { Link, Outlet, useLocation } from "react-router-dom";
import LOGO_IPS from "../../../assets/img/logos/LogoSanavit(Pequeño).png";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const Appointment = () => {
  const location = useLocation(); //To get /url and compare

  return (
    <>
      {location.pathname !== "/citas" ? (
        <>
          <Link to="/citas">
            <img
              className="w-auto h-20 absolute top-2 left-2"
              src={LOGO_IPS}
              alt="Logo"
            />
          </Link>
          <Outlet />
        </>
      ) : (
        <main className="max-h-screen bg-background p-4 md:p-2 mx-auto container">
          <header className="w-full flex justify-center">
            <img className="w-auto h-24" src={LOGO_IPS} alt="Logo" />
          </header>
          <Link to="/" className="absolute top-2 left-2">
            <ArrowLeftCircleIcon className="size-12" />
          </Link>
          <div className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] scale-90 pt-0 px-5 pb-10">
            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
              {/* Full-height element in the first column */}
              <Link to ="agendar" className="bg-green-100 text-black p-6 md:p-8 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-green-300 transition duration-300">
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-pretty">
                  Agendar Citas
                </h2>
                <p className="text-md mt-4 text-center md:text-lg">
                  Programa una nueva cita con un especialista en la fecha y hora
                  que más te convenga.
                </p>
              </Link>

              {/* Two half-height elements in the second column */}
              <div className="grid grid-rows-2 gap-4 md:gap-8 h-full">
                <Link to="reagendar" className="bg-blue-100 text-black p-6 md:p-8 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-blue-300 transition duration-300">
                  <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold text-pretty">
                    Re - Agendar Citas
                  </h2>
                  <p className="text-md mt-4 text-pretty md:text-lg">
                    Reprograma tu cita en caso de cambios de disponibilidad.
                  </p>
                </Link>
                <Link to="cancelar" className="bg-red-100 text-black p-6 md:p-8 flex flex-col items-center justify-center rounded-lg shadow-lg hover:bg-red-300 transition duration-300">
                  <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold text-pretty">
                    Cancelar Citas
                  </h2>
                  <p className="text-md mt-4 text-pretty md:text-lg">
                    Cancela una cita ya programada si no puedes asistir.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Appointment;
