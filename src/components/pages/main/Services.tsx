import { services } from "../../../utils/data/services";
import Footer from "../../ui/global/Footer";
import NavBar from "../../views/global/NavBar";
import GRID_IMAGE_4 from "../../../assets/img/services/grid/doctor-with-stethoscope-hands-hospital-background.png";
import GRID_IMAGE_1 from "../../../assets/img/services/grid/happy-doctor-holding-clipboard-with-patients.png";
import GRID_IMAGE_5 from "../../../assets/img/services/grid/interior-view-operating-room.png";
import GRID_IMAGE_3 from "../../../assets/img/services/grid/medium-shot-smiley-doctor-checking-woman.png";
import GRID_IMAGE_2 from "../../../assets/img/services/grid/patient-doing-physical-rehabilitation-helped-by-therapists.png";

const Services = () => {
  return (
    <>
      <NavBar />
      <main className="h-screen flex flex-col ">
        {/* SERVICIOS */}
        <section className="w-full mt-36 mb-20 px-12 sm:px-0">
          <div className="w-1/3 text-white text-3xl text-right font-bold py-4 pr-10 rounded-r-full bg-gradient-to-r from-primary-blue to-secondary-blue mb-10">
            Tipos de servicio
          </div>

          <div className="w-full flex flex-col justify-center container mx-auto">
            <p className="text-pretty mb-16">
              Nos comprometemos a brindar servicios de alta calidad que se
              adaptan a sus necesidades individuales, asegurando un enfoque
              integral para su salud y bienestar. Explore nuestra gama de
              servicios diseñados para mejorar su calidad de vida y apoyarlo en
              cada paso de su recuperación. Estamos orgullosos de ofrecer un
              cuidado excepcional y personalizado a cada uno de nuestros
              pacientes.
            </p>
            <ul className="flex flex-col gap-y-6">
              {services.map((service) => (
                <li key={service.id}>
                  <h2 className="font-semibold mb-1">{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="h-[1px] bg-black w-full" />
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* IMAGEN DIVIDER */}
        <div className="w-full h-full bg-imagen-fondo-service flex items-center justify-center mb-9 p-20 bg-no-repeat">
          <div className="flex flex-col items-center justify-center container mx-auto gap-y-6">
            <h2 className="font-bold text-4xl text-center text-wrap text-white">
              Programe su cita hoy mismo y dé el primer paso hacia una vida más
              saludable.
            </h2>
            <p className="text-white text-2xl">
              Agende, cancele o reprograme sus citas ya hechas con nosotros.
            </p>
            <a
              href={"/citas"}
              className="text-white px-12 py-2 rounded-3xl bg-gradient-to-r from-primary-blue to-secondary-blue">
              Agendar
            </a>
          </div>
        </div>
        <section className="flex justify-evenly container items-center mx-auto mt-9 mb-5">
          <div className="bg-primary-blue text-white px-8 py-4 w-1/3 rounded-3xl">
            <h2 className="text-3xl font-bold mb-2">
              ¡Califica nuestro servicio!
            </h2>
            <p className="text-xl">
              Desde Ahora podrás calificar y opinar sobre nuestro servicio luego
              de asistir a tu cita.
            </p>
          </div>
          <div className=" px-8 py-4 w-1/3 hover:border hover:rounded-3xl hover:border-black hover:cursor-pointer">
            <h2 className="text-dark-blue font-bold text-xl">Diligencia la</h2>
            <h3 className="text-aux-1-yellow text-4xl">
              Encuesta de satisfacción
            </h3>
          </div>
        </section>
        <section className="container mx-auto my-20">
          <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4">
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img
                src={GRID_IMAGE_1}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img
                src={GRID_IMAGE_2}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img
                src={GRID_IMAGE_3}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img
                src={GRID_IMAGE_4}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="row-span-2 col-start-4 row-start-1 group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src={GRID_IMAGE_5}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
export default Services;
