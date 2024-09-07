import DOCTOR_CHECKING from "../../../assets/img/aboutUs/doctorCita.png";
import { aboutUs } from "../../../utils/data/aboutUs";
import NavBar from "../../views/global/NavBar";
import DoctorsCarousel from "../../ui/main/aboutUs/DevCarousel";
import Footer from "../../ui/global/Footer";
import SocialMedia from "../../ui/main/aboutUs/SocialMedia";
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
          <section className="flex flex-col items-center lg:flex-row mb-2 xl:mx-16 2xl:mx-48 lg:mb-10  container mx-auto">
            <div className="px-4 sm:px-8 lg:p-0 lg:w-1/2 lg:mb-5 sm:mr-6">
              <h1 className="text-primary-blue font-bold text-2xl lg:text-4xl mb-3">
                Compromiso social
              </h1>
              <p>
                Estamos comprometidos con el bienestar de nuestra comunidad.
                Creemos que cada persona merece acceso a servicios médicos de
                calidad, y trabajamos incansablemente para hacer de esta visión
                una realidad.
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
            <SocialMedia />
            {/* Mision , Vision , Objetivo */}
          </section>
          <section className="flex flex-col items-center w-full md:mb-6">
            <div className="flex flex-row p-8 border-2 border-primary-blue rounded-2xl container mx-auto">
              {aboutUs.map((item, i) => (
                <article key={i} className="px-10 mx-2">
                  <div className="flex items-center justify-center gap-x-5 mb-4">
                    <img
                      className="text-primary-blue size-16"
                      src={item.imgRelated}
                      alt={item.title}
                    />
                    <h3 className="text-primary-blue font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base lg:text-xl font-light">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <div className="h-auto w-full bg-gray-100 my-5">
            <section className="flex flex-col sm:flex-row justify-center items-center text-base lg:text-xl 2xl:text-2xl">
              {/* Seccion "Transparencia" */}
              <div className="flex flex-col sm:w-2/5 h-auto text-pretty m-5 sm:m-10">
                <h1 className="text-dark-blue font-bold text-2xl lg:text-4xl mb-2">
                  Transparencia
                </h1>
                <div className="overflow-hidden">
                  <p>!Estamos para escucharte!</p>
                  <p>Línea de transparencia:</p>
                  <p>
                    <a href="#" className="font-normal ">
                      notificacionesyquejas@sanavit.ips.com
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
                <h1 className="text-dark-blue font-bold text-2xl lg:text-4xl mb-2">
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
        <section className="container mx-auto">
          <h1 className="text-primary-blue font-bold text-2xl lg:text-4xl my-12 flex items-center justify-center text-center">
            Nuestro equipo <br />
            de desarrollo
          </h1>
          <DoctorsCarousel />

          <p className="text-sm p-8 sm:text-base sm:px-40 sm:py-14 mt-10">
            En SaludPro, tu salud es nuestra prioridad número uno. Nos
            esforzamos por ofrecerte una experiencia de atención médica
            excepcional en cada visita, con instalaciones modernas, tecnología
            de vanguardia y un equipo comprometido con tu bienestar. Estamos
            aquí para cuidarte, apoyarte y guiarte hacia una vida más saludable
            y feliz.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
