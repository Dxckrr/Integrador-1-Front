import FACEBOOK_ICON from "../../../assets/svg/icons/social/facebook.svg";
import INSTAGRAM_ICON from "../../../assets/svg/icons/social/instagram.svg";
import TWITTER_ICON from "../../../assets/svg/icons/social/twitter.svg";

/**
 * This component represents the Card that is displayed on the LOGIN section
 * contains 2 inputs and a resolver function
 * @returns {Component} Footer
 */

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-b from-primary-blue to-primary-blue grid grid-cols-2 sm:grid-cols-3 text-xs p-4 lg:flex lg:items-center lg:justify-between md:px-12 lg:px-16 xl:px-24 2xl:px-28 text-white 2xl:text-sm">
        <div className="flex flex-col justify-center mx-2 text-justify">
          <h2 className="mb-2 font-bold">Contacto</h2>
          <ul className="flex flex-col text-nowrap">
            <li>
              <p>+57 607 578 4980</p>
            </li>
            <li>
              <p>+57 607 578 4980</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mx-2 p-2">
          <a href="#" className="hover:underline hover:decoration-white">
            notificacionesyquejas@sanavit.ips.com
          </a>
        </div>
        <div className="flex flex-col justify-center sm:items-center mx-2 text-nowrap lg:items-start">
          <h1 className="font-bold">Ubicación</h1>
          <p>Calle 45 No. 55 - 65</p>
          <p>Bucaramanga, Colombia.</p>
        </div>
        <div className="flex flex-col justify-center mx-2 p-2">
          <p>Edificio Business Plaza, piso 13</p>
          <p>Medellín Distrito Especial de Ciencia, Tecnología</p>
        </div>
        <div className="flex items-center justify-center mx-2 text-nowrap">
          <ul className="list-disc">
            <li>
              <p>Horarios de atención.</p>
            </li>
            <li>
              <p>Buzón de reclamos.</p>
            </li>
            <li>
              <p>Políticas de privacidad.</p>
            </li>
            <li>
              <p>Términos y condiciones.</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-2 justify-center">
          <div className="flex items-center justify-center text-nowrap">
            <h2 className="font-bold">Siguenos en nuestras redes</h2>
          </div>
          <div className="mt-1 flex justify-evenly">
            <a
              className="hover:scale-125 hover:rotate-12 duration-300"
              href="/">
              <img className="w-5" src={INSTAGRAM_ICON} />
            </a>
            <a
              className="hover:scale-125 hover:rotate-12 duration-300"
              href="/">
              <img className="w-5" src={FACEBOOK_ICON} />
            </a>
            <a
              className="hover:scale-125 hover:rotate-12 duration-300"
              href="/">
              <img className="w-5" src={TWITTER_ICON} />
            </a>
          </div>
        </div>
      </footer>
      <aside className="w-full bg-gradient-to-b from-primary-blue to-primary-blue text-xs pb-2 lg:flex lg:items-center lg:justify-center md:px-12 lg:px-16 xl:px-24 2xl:px-28 text-white 2xl:text-sm">
        <span className="font-bold mr-1">©</span> Sanavit | Colombia 2024
      </aside>
    </>
  );
};
export default Footer;
