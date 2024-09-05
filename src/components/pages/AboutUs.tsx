// import DOCTOR_CHECKING from "../../assets/img/people/DoctorCheck.png";
// import SERVICES_BACKGROUND from "../../assets/img/backgrounds/ServicesBackground.jpg";
// import { aboutUs } from "../../utils/data/aboutUs";
import NavBar from "../NavBar";
import Footer from "../ui/Footer";
// import MISION_IMG from "../../assets/svg/icons/aboutUs/mision.svg";
// import VISION_IMG from "../../assets/svg/icons/aboutUs/vision.svg";
// import OBJETIVO_IMG from "../../assets/svg/icons/aboutUs/objetivo.svg";

/**
 * This section contains the information about the IPS
 * @returns {Component} AboutUs
 */
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col">
        <main className="flex flex-col pt-24 sm:pt-32 sm:text-xl 2xl:text-2xl font-light justify-center items-center">
          {/* Primera seccion Texto "Quienes somos" e imagen */}
          <section className="flex flex-col items-center lg:flex-row mx-8  mb-2 xl:mx-16 2xl:mx-48 lg:mb-10">
            <div className="px-4 sm:px-8 lg:p-0 lg:w-1/2 lg:mb-5 sm:mr-6">
              <h1 className="font-bold text-2xl lg:text-4xl mb-3">
                ¿Quienes somos?
              </h1>
              <p>
                En SaludPro, nos enorgullece ser mucho más que una institución
                prestadora de salud; somos un equipo comprometido con la
                excelencia en el cuidado y bienestar de nuestros pacientes.
                Desde nuestros humildes comienzos, nos hemos dedicado a brindar
                atención médica de calidad con un enfoque centrado en las
                personas.
              </p>{" "}
              <br />
              <p className="hidden xl:block">
                Brindamos servicios de atención médica domiciliaria, con un
                equipo interdisciplinario, calificado, capacitado para ofrecer
                una atención segura, oportuna, eficiente y de calidad humana,
                utilizando la tecnología adecuada, la mejora continua de los
                procesos y la promoción del autocuidado y la participación
                familiar.
              </p>
            </div>

            <div className="ml-2 2xl:mr-3 p-4 2xl:p-0">
              <img
                className="h-full w-full object-cover shadow-smallShadow"
                src={DOCTOR_CHECKING}
                alt=""
              />
            </div>
            {/* Redes */}
            <div className="flex lg:flex-col justify-center">
              <a
                className="flex items-center m-2 mx-4 lg:mx-0 hover:scale-110 duration-100 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg p-2 hover:bg-primary-blue hover:fill-white"
                href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                <svg id="Capa_1" data-name="Capa 1" viewBox="0 0 301.77 234.71">
                  <path
                    d="M327.45,95.28h0c-.18-1-.42-1.88-.66-2.81-.08-.29-.15-.59-.23-.88-.25-.85-.53-1.67-.83-2.49-.12-.36-.25-.71-.38-1.06-.31-.78-.64-1.54-1-2.3l-.53-1.1c-.37-.72-.75-1.44-1.15-2.13-.21-.37-.44-.73-.66-1.09-.42-.68-.84-1.35-1.3-2-.25-.36-.51-.69-.77-1-.48-.63-.95-1.26-1.46-1.86-.26-.31-.55-.61-.83-.91a42.59,42.59,0,0,0-3.57-3.54l-.62-.56c-.48-.4-1-.76-1.48-1.13s-1-.77-1.51-1.13-1-.64-1.49-1-1.12-.7-1.7-1-1-.54-1.53-.8-1.23-.62-1.86-.9-1-.45-1.55-.65c-.67-.27-1.35-.51-2-.75l-1.56-.5c-.73-.21-1.47-.39-2.22-.57-.5-.11-1-.24-1.5-.34-.85-.16-1.71-.28-2.57-.39-.43,0-.85-.13-1.29-.17-1.31-.13-2.63-.2-4-.2H67.41c-1.34,0-2.66.07-4,.2-.43,0-.85.12-1.28.17-.87.11-1.73.23-2.57.39-.51.1-1,.23-1.5.34-.75.18-1.5.36-2.23.58-.52.15-1,.32-1.55.49-.69.24-1.37.48-2,.75s-1,.42-1.55.65-1.25.58-1.87.9-1,.52-1.53.8-1.14.68-1.7,1-1,.62-1.49,1-1,.75-1.51,1.13-1,.73-1.47,1.13c-.23.19-.45.41-.67.61A41.52,41.52,0,0,0,37,75.62c-.28.3-.56.6-.83.91-.51.6-1,1.23-1.46,1.87-.25.34-.52.67-.77,1-.45.64-.88,1.31-1.3,2-.22.36-.45.72-.66,1.09-.4.69-.78,1.41-1.14,2.13-.19.36-.36.73-.54,1.1-.35.76-.68,1.52-1,2.29-.14.36-.26.71-.39,1.07-.3.82-.58,1.64-.82,2.48-.09.3-.16.6-.23.9-.25.92-.49,1.85-.67,2.79h0a41.45,41.45,0,0,0-.74,7.7V255.73a41,41,0,0,0,41,41H287.22a41,41,0,0,0,41-41V103A41.45,41.45,0,0,0,327.45,95.28Zm-40.23-7.15a14.19,14.19,0,0,1,2.27.19l.39.06a14.43,14.43,0,0,1,2.08.54l.14,0-109,80.86a9.74,9.74,0,0,1-11.61,0L62.53,89l.13,0a14.56,14.56,0,0,1,2.09-.54l.38-.06a14.32,14.32,0,0,1,2.28-.19H287.22Zm0,182.45H67.41a14.87,14.87,0,0,1-14.85-14.85V114.11l103.38,76.7a35.85,35.85,0,0,0,42.75,0l103.38-76.7V255.73A14.88,14.88,0,0,1,287.22,270.58Z"
                    transform="translate(-26.43 -62)"
                  />
                </svg>
              </a>
              <a
                className="flex items-center m-2 mx-4 lg:mx-0 hover:scale-110 duration-100 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg p-2 hover:bg-primary-blue hover:fill-white"
                href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                <svg
                  className="w-full h-full"
                  id="Capa_1"
                  data-name="Capa 1"
                  viewBox="0 0 169.22 337.82">
                  <path
                    d="M141.26,344.91V193.18H92v-2.74c0-20.74.05-41.49-.07-62.23,0-2.55.82-3,3.1-3,14.41.09,28.82,0,43.23,0h3c0-1.19,0-2.12,0-3,.16-15.2-.16-30.42.61-45.59.87-17.33,5.78-33.49,17.3-47,9.9-11.66,22.76-18.08,37.59-20.95,11.7-2.27,23.51-1.56,35.28-1.17,7.66.26,15.31,1.06,23,1.57,1.26.09,1.78.53,1.78,1.88,0,15.59,0,31.19,0,47.15h-2.59c-8.15,0-16.31-.09-24.46,0-6,.09-11.64,1.56-16,6.12s-5.68,10.13-5.84,15.94c-.4,14.64-.37,29.29-.5,43.93a6.72,6.72,0,0,0,.25,1.14h53.47c-2.53,22.72-5,45.15-7.56,67.8H207.42V344.91Z"
                    transform="translate(-91.89 -7.09)"
                  />
                </svg>
              </a>
              <a
                className="flex items-center m-2 mx-4 lg:mx-0 hover:scale-110 duration-100 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg p-2 hover:bg-primary-blue hover:fill-white"
                href="https://media.discordapp.net/attachments/860225409369899011/925050870230548540/Aether_was_here.gif.gif?ex=662f1702&is=662dc582&hm=98a52e289f0339048aa9e55a97c89a9140b4702f01753ec7f8ea9de73576873d&">
                <svg id="Capa_1" data-name="Capa 1" viewBox="0 0 353 352">
                  <path d="M3.88,282.9C42,286.34,76,277.51,107.34,254.47c-15.73-1.17-29.07-5.59-40.74-14.41a69.24,69.24,0,0,1-24.72-34.42c9.84,1,19.25,2,29.75-1.3-20-5.58-34.87-16.14-44.92-32.93a64.12,64.12,0,0,1-9.58-35.24L46,144.37l.71-1.28c-30-25.76-37.09-56.23-19.78-92.92,38.89,45,87.09,69.05,144.7,73.25,0-7.09-.5-13.77.09-20.36,2.57-28.61,17.37-49,43.73-59.77s51.66-6.52,73.69,11.94c4.41,3.69,8.12,4.56,13,2.79,12.12-4.39,24.22-8.85,36.67-13.41-4.84,15-14.66,26.51-27.41,36.45,4.08-.78,8.19-1.42,12.22-2.37s8.14-2.1,12.14-3.36,8.12-2.82,13.36-4.66C339.78,84.09,329.63,95,317.57,104c-3.13,2.33-4,4.71-3.91,8.44,2.07,85.74-58.15,182.76-166.81,199.44C98.59,319.24,53,311.6,10.4,287.48c-1.75-1-3.47-2.05-5.19-3.11A11.51,11.51,0,0,1,3.88,282.9Z" />
                </svg>
              </a>
              <a
                className="flex items-center m-2 mx-4 lg:mx-0 hover:scale-110 duration-100 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg p-2 hover:bg-primary-blue hover:fill-white"
                href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                <svg id="Capa_1" data-name="Capa 1" viewBox="0 0 339.96 339.96">
                  <path
                    d="M260.94,37.39a54.23,54.23,0,0,1,54.17,54.17V260.44a54.23,54.23,0,0,1-54.17,54.17H92.06a54.23,54.23,0,0,1-54.17-54.17V91.56A54.23,54.23,0,0,1,92.06,37.39H260.94m0-31.37H92.06A85.54,85.54,0,0,0,6.52,91.56V260.44A85.54,85.54,0,0,0,92.06,346H260.94a85.54,85.54,0,0,0,85.54-85.54V91.56A85.54,85.54,0,0,0,260.94,6Z"
                    transform="translate(-6.52 -6.02)"
                  />
                  <path
                    d="M176.5,112.49A63.51,63.51,0,1,1,113,176a63.58,63.58,0,0,1,63.51-63.51m0-29.21A92.72,92.72,0,1,0,269.22,176,92.72,92.72,0,0,0,176.5,83.28Z"
                    transform="translate(-6.52 -6.02)"
                  />
                  <path
                    d="M269.22,67.83a15.46,15.46,0,1,0,15.45,15.45,15.46,15.46,0,0,0-15.45-15.45Z"
                    transform="translate(-6.52 -6.02)"
                  />
                </svg>
              </a>
            </div>
          </section>
          <div className="h-auto w-full bg-gray-100 my-5">
            <section className="flex flex-col sm:flex-row justify-center items-center text-base lg:text-xl 2xl:text-2xl">
              {/* Seccion "Transparencia" */}
              <div className="flex flex-col sm:w-2/5 h-auto text-pretty m-5 sm:m-10">
                <h1 className="font-bold text-2xl lg:text-4xl mb-2 text-Dark-blue">
                  Transparencia
                </h1>
                <div className="overflow-hidden">
                  <p>!Estamos para escucharte!</p>
                  <p>Línea de transparencia:</p>
                  <p>
                    <a href="#" className="font-normal ">
                      notificacionesyquejas@saludpro.ips.com
                    </a>
                  </p>
                  <p className="mt-6">
                    Un canal donde pueden informar de manera anónima actos
                    incorrectos en la empresa. Tales como:
                  </p>
                  <p>
                    Revelación de información confidencial, fraude, conflicto de
                    interés, hurto u otros comportamientos irregulares
                  </p>
                </div>
              </div>
              {/* Seccion "Valores" */}
              <div className="flex flex-col w-auto h-auto text-pretty m-5 sm:m-10">
                <h1 className="font-bold text-2xl lg:text-4xl text-Dark-blue mb-2">
                  Valores
                </h1>
                <ul className="list-inside grid grid-cols-2 sm:block">
                  <li>
                    <span className="text-2xl">&#8226;</span> Compasión.
                  </li>
                  <li>
                    <span className="text-2xl">&#8226;</span> Excelencia.
                  </li>
                  <li>
                    <span className="text-2xl">&#8226;</span> Integridad.
                  </li>
                  <li>
                    <span className="text-2xl">&#8226;</span> Innovación.
                  </li>
                  <li>
                    <span className="text-2xl">&#8226;</span> Respeto y
                    transparencia.
                  </li>
                  <li>
                    <span className="text-2xl">&#8226;</span> Responsabilidad
                    Social.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
        {/* HR */}
        <section className="flex flex-col items-center w-full md:mb-4">
          <div className="flex p-10">
            <button
              className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-24 h-24 mx-2 sm:w-40 sm:h-40 lg:w-52 lg:h-52 sm:mx-6 lg:mx-20 hover:bg-gray-100${
                activeButton === "mision"
                  ? "scale-110 shadow-customButton duration-300"
                  : ""
              }`}
              onClick={() => handleInfo("mision")}>
              <img className="w-1/2 h-1/2 sm:ml-6" src={MISION_IMG} alt="" />
              <h3 className=" hidden sm:block sm:text-2xl text-black font-bold">
                Misión
              </h3>
            </button>
            <button
              className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-24 h-24 mx-2 sm:w-40 sm:h-40 lg:w-52 lg:h-52 sm:mx-6 lg:mx-20 hover:bg-gray-100${
                activeButton === "vision"
                  ? "scale-110 shadow-customButton duration-300"
                  : ""
              }`}
              onClick={() => handleInfo("vision")}>
              <img className="w-1/2 h-1/2 " src={VISION_IMG} alt="" />
              <h3 className=" hidden sm:block sm:text-2xl text-black font-bold">
                Visión
              </h3>
            </button>
            <button
              className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-24 h-24 mx-2 sm:w-40 sm:h-40 lg:w-52 lg:h-52 sm:mx-6 lg:mx-20 hover:bg-gray-100${
                activeButton === "objetivo"
                  ? "scale-110 shadow-customButton duration-300"
                  : ""
              }`}
              onClick={() => handleInfo("objetivo")}>
              <img className="w-1/2 h-1/2 " src={OBJETIVO_IMG} alt="" />
              <h3 className=" hidden sm:block sm:text-2xl text-black font-bold">
                Objetivo
              </h3>
            </button>
          </div>
          <div className="h-52 px-4 mb-6 sm:p-0 sm:mt-6 sm:mb-24 sm:w-2/3 sm:h-32">
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl font-light">
              {info
                ? info.description
                : "Haz click en las imagenes para ver información"}
            </p>
          </div>
        </section>
        <section>
          <div className="w-full">
            <img
              className="w-full h-full object-contain"
              src={SERVICES_BACKGROUND}
              alt="Doctor Smiling"
            />
          </div>
          <h1 className="text-sm p-8 sm:text-base sm:px-40 sm:py-14">
            En SaludPro, tu salud es nuestra prioridad número uno. Nos
            esforzamos por ofrecerte una experiencia de atención médica
            excepcional en cada visita, con instalaciones modernas, tecnología
            de vanguardia y un equipo comprometido con tu bienestar. Estamos
            aquí para cuidarte, apoyarte y guiarte hacia una vida más saludable
            y feliz.
          </h1>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
