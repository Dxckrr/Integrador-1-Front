import NavBar from "../../views/global/NavBar.tsx";
import Footer from "../../ui/global/Footer.tsx";
import { services } from "../../../utils/data/services.ts";
import Carousel from "../../ui/main/landing/Carousel.tsx";
import ScheduleCard from "../../ui/main/landing/ScheduleCard.tsx";
import PORTRAIT_IMG from "../../../assets/img/others/Main_Image_Landing.png";
import Chat_Bot from "../../ui/main/Chat_Bot.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
/**
 * This section contains tha main page
 * @returns {Component} Dashboard
 */
const Dashboard = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };
  return (
    <>
      <NavBar />
      {/* 1 SECCIÓN  = LANDING*/}
      <main className="w-full flex flex-col my-16 ">
        <section className="flex h-2/5 w-full text-white bg-primary-blue">
          <div className="flex flex-col w-full lg:flex-row lg:items-center lg:mx-auto lg:container">
            <article className="flex flex-col items-start px-8 py-6 lg:py-0 lg:mr-20 order-last lg:order-1">
              <div className="mb-4 lg:mb-0">
                <h2 className="font-bold text-xl sm:text-2xl">
                  Servicios y atenciones
                </h2>
                <p className="text-md sm:text-lg">
                  Contamos con más de 20 servicios diferentes en distintas áreas
                  de medicina
                  <br /> musculoesquelética y rehabilitación, conoce ya nuestros
                  servicios.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-xl sm:text-2xl">
                  Agendamiento y Pago Online
                </h2>
                <p className="text-md sm:text-lg">
                  Con nosotros cuentas con todo tipo de agendamientos de citas e
                  incluido pagos
                  <br /> online para que puedas hacerlo con mayor comodidad
                  desde tu dispositivo.
                </p>
              </div>
            </article>
            <img
              className="w-auto lg:h-5/6 order-first lg:order-last lg:shadow-xl"
              src={PORTRAIT_IMG}
              alt=""
            />
          </div>
        </section>

        <section className="mt-4 bg-white relative h-3/5 w-full">
          <div className="flex flex-col items-center w-full mx-auto container">
            <div className="px-8 mt-8">
              <p>
                Nuestro centro se especializa en proporcionar atención médica de
                primera clase en medicina musculoesquelética y rehabilitación.
                Con un equipo de profesionales experimentados y tecnología
                avanzada, nos dedicamos a mejorar la calidad de vida de nuestros
                pacientes. Ofrecemos un ambiente cálido y acogedor, enfocado en
                brindar tratamientos personalizados para ayudarlo a alcanzar sus
                objetivos de salud y bienestar. ¡Visítenos y déjenos ser parte
                de su camino hacia una vida más saludable!
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-14 mb-16">
              Nuestras áreas de servicios
            </h1>
            <ul className="grid grid-flow-col grid-rows-2 justify-center items-center gap-x-12 gap-y-32 lg:flex lg:flex-row lg:gap-x-16 xl:gap-x-32 2xl:gap-x-44 mb-14">
              {services.map((service) => (
                <li
                  className="flex flex-col items-center justify-center size-20 sm:size-28 2xl:size-32"
                  key={service.id}>
                  <img
                    className="object-contain"
                    src={service.imgRelated}
                    alt={service.title}
                  />
                  <p className="text-sm sm:text-base text-pretty mt-4 font-bold text-center lg:text-lg">
                    {service.title}
                  </p>
                </li>
              ))}
            </ul>
            <Link to="/servicios" className="bg-primary-blue text-xl text-white px-6 py-2 rounded-3xl mt-4">
              Conocer más
            </Link>
          </div>
        </section>
      </main>
      <Carousel />
      <section className="flex items-center justify-center w-full mx-auto container sm:mt-16 md:mt-8">
        <div className="flex flex-col sm:flex-row items-center relative">
          <div className="w-1/2 flex justify-center order-last sm:order-first">
            <img
              src="/src/assets/img/others/doctors_Landing.png"
              alt="Médicos"
              className="object-contain"
            />
          </div>

          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black">
            <span className="rounded-full border-2 border-black bg-white size-3 block left-1/2 transform -translate-x-[5px]"></span>
          </div>

          <div className="flex flex-col justify-center sm:w-1/3 p-8 sm:p-0 sm:ml-12 order-first sm:order-last">
            <div className="relative">
              <h2 className="sm:text-md lg:text-xl font-bold">
                Especializados en
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-blue">
                Medicina musculoesquelética y rehabilitación
              </h3>
              <p className="text-sm mt-4 sm:text-base text-gray-700">
                Nuestro equipo de expertos se dedica a ayudar a nuestros
                pacientes a recuperar su movilidad y calidad de vida mediante
                diagnósticos precisos y tratamientos personalizados. Utilizamos
                las técnicas más avanzadas y un enfoque basado en la evidencia
                para asegurar una recuperación efectiva y duradera. Ya sea que
                esté lidiando con una lesión deportiva o buscando rehabilitación
                postquirúrgica, estamos aquí para acompañarlo en cada paso de su
                recuperación.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-16 mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Ubicación
          </h1>
          <h2 className="text-center px-4 sm:text-lg lg:text-xl sm:p-0">
            IPS Sanavit - Centro de medicina musculoesquelética y rehabilitación
          </h2>
        </div>
        <div className="relative w-4/5">
          <div className="absolute inset-0 border-4 rounded-2xl border-primary-blue h-[450px] -z-10 translate-x-4 translate-y-4"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63351.90540476009!2d-73.13045242461298!3d7.068567852977797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6840b36653b9c5%3A0x4dcdbc55842151df!2sUniversidad%20Pontificia%20Bolivariana%20Seccional%20Bucaramanga!5e0!3m2!1ses-419!2sco!4v1724628729225!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            className="relative"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className="my-8 xl:my-12 2xl:my-16 container mx-auto">
        <p className="text-pretty mb-8 p-8">
          Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
          Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
          fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
          consequat, leo eget bibendum sodales, augue velit cursus nunc.
        </p>
        <h1 className="text-center text-xl lg:text-start sm:text-2xl lg:text-3xl font-semibold">
          Horarios para Líneas de atención
        </h1>
        <div className="flex flex-col items-center justify-center mt-8 lg:items-start lg:justify-normal sm:flex-row md:gap-x-32">
          <ScheduleCard days="Lunes a Viernes" hours="7:00 a.m - 7:00 p.m" />
          <ScheduleCard days="Sabado" hours="7:00 a.m - 7:00 p.m" />
        </div>
      </section>
      {/* Chat_Bot */}
      {chatVisible && <Chat_Bot onClose={toggleChat} />}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-primary-blue text-white px-6 py-2 rounded-3xl shadow-lg">
        Asistente Virtual
      </button>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Dashboard;
