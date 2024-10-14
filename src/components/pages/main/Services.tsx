import { services } from "../../../utils/data/services";
import Footer from "../../ui/global/Footer";
import NavBar from "../../views/global/NavBar";
import GRID_IMAGE_4 from "../../../assets/img/services/grid/doctor-with-stethoscope-hands-hospital-background.png";
import GRID_IMAGE_1 from "../../../assets/img/services/grid/happy-doctor-holding-clipboard-with-patients.png";
import GRID_IMAGE_5 from "../../../assets/img/services/grid/interior-view-operating-room.png";
import GRID_IMAGE_3 from "../../../assets/img/services/grid/medium-shot-smiley-doctor-checking-woman.png";
import GRID_IMAGE_2 from "../../../assets/img/services/grid/patient-doing-physical-rehabilitation-helped-by-therapists.png";
import { useState } from "react";
import Satisfaccion from "../EncuestaSatisfaccion";

const Services = () => {
  const [isSatisfactionModal, setSatisfactionModal] = useState<boolean>(false);
  const closeModal = () => setSatisfactionModal(false);
  return (
    <>
      <NavBar />
      {isSatisfactionModal && <Satisfaccion onClose={closeModal} />}
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
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary-blue to-blue-600 p-8 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  ¡Tu opinión es importante!
                </h2>
                <p className="text-blue-100 mb-6">
                  Ayúdanos a mejorar nuestro servicio compartiendo tu
                  experiencia reciente.
                </p>
                <div className="flex items-center space-x-2 text-yellow-300">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-3xl focus:outline-none transition-colors duration-300 text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Encuesta de Satisfacción
                </h3>
                <p className="text-gray-600 mb-6">
                  Tus respuestas nos ayudan a brindar un mejor servicio a todos
                  nuestros clientes.
                </p>
                <button
                  onClick={() => setSatisfactionModal(true)}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-blue to-purple-500 hover:from-secondary-blue hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Comenzar Encuesta
                  <svg
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <button
            onClick={() => setSatisfactionModal(true)}
            className="w-1/3 group relative cursor-pointer overflow-hidden bg-gradient-to-r from-white to-[#EFF0F1] border-1 border-gray-900 rounded-2xl p-4 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:w-1/3">
            <span className="absolute inset-0 z-0 m-auto h-7 w-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>{" "}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                <svg
                  className="h-10 w-10 text-white transition-all"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    strokeLinejoin="round"
                    strokeLinecap="round"></path>
                </svg>
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-gray-700 transition-all duration-500 group-hover:text-white">
                Encuesta de Satisfacción
              </h3>
            </div>
          </button> */}
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
