import Modal from "react-modal";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LOGO_IPS from "../../assets/img/logos/LogoSanavit(Pequeño).png";
import usePasswordToggle from "../../hooks/auth/usePassword";
import { modalStyles } from "../../styled-components/auth/loginModal";
import { useLogin } from "../../hooks/auth/useLoginForm";
import Loader from "../ui/Loader";

const Login = ({ onClose }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(true);

  const [InputType, Icon] = usePasswordToggle();

  const [showEye, setShowEye] = useState<boolean>(false);
  const { register, errors, onSubmit, loading, errorOnResponse } = useLogin();

  function closeModal() {
    setIsOpen(false);
    if (onClose) onClose();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Login Modal"
      ariaHideApp={false}>
      <article className="bg-white rounded-2xl text-black flex flex-col items-center justify-evenly box-border relative">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 text-gray-600 hover:text-gray-900">
          <XMarkIcon className="size-8" />
        </button>
        {loading ? <Loader /> : ""}
        {errorOnResponse ? (
          <p className="text-red-600 animate-horizontal-vibration animate-iteration-count-once">
            Error al iniciar sesión
          </p>
        ) : (
          ""
        )}
        <header>
          <div className="flex items-center justify-center w-56 sm:w-64 md:w-72 p-2 mt-2">
            <img src={LOGO_IPS} alt="logo_ips" />
          </div>
          <h1 className="text-xl flex justify-center">Iniciar Sesión</h1>
        </header>
        <section className="w-full">
          <form onSubmit={onSubmit}>
            <div className="m-4 p-4">
              <span className="relative">
                <input
                  className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
                  type="email"
                  autoComplete="off"
                  placeholder=""
                  {...register("email")}
                />

                <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-90 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  Email
                </label>
              </span>
              {errors.email?.message && (
                <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="m-4 p-4">
              <span className="relative">
                <input
                  className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
                  type={InputType}
                  autoComplete="off"
                  placeholder=""
                  {...register("password", {
                    onChange: (event) => {
                      const value = event.target.value.trim();
                      setShowEye(value.length > 0); // Actualiza el estado del icono del ojo
                    },
                  })}
                />

                <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-90 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  Password
                </label>
                {showEye && (
                  <span className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer mb-2">
                    {Icon}
                  </span>
                )}
              </span>
              {errors.password?.message && (
                <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div></div>
            <div className="flex justify-center py-4 m-0">
              <button
                type="submit"
                className="bg-primary-blue text-white px-14 py-[6px] rounded-3xl">
                Entrar
              </button>
            </div>
          </form>
        </section>
      </article>
    </Modal>
  );
};

export default Login;
