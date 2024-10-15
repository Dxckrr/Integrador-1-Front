import { useForm } from "react-hook-form";
import { RegisterPacient } from "../../../types/core/RegisterPacient";

const inputActive =
  "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const div = "flex-col w-1/3 pr-10 mt-5";

const OperatorRegister = () => {
  const { register, handleSubmit } = useForm<RegisterPacient>();
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] pb-10">
        <form className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Registrar usuario</h1>
          </div>

          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg">Información personal</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres y Apellidos</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Nombres del paciente..."
                  {...register("nombreUsuario")} //AQUI DEBERIA DIVIDIRSE EN NOMBRE Y APELLIDO
                />
              </div>
              <div className={div}>
                <label className="text-lg">Documento de Identidad</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Documento del paciente..."
                  {...register("CC")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Fecha de nacimineto</label>
                <input
                  className={inputActive}
                  type="date"
                  placeholder="DD/MM/AA..."
                  {...register("fecha_nacimiento")}
                />
              </div>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Género</label>
                <select className={inputActive} {...register("sexo")}>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className={div}>
                <label className="text-lg">Tipo de afiliación</label>
                <select className={inputActive} {...register("CC")}>
                  <option> </option>
                  <option>Contributivo</option>
                  <option>Subsidiado</option>
                </select>
              </div>
              <div className={div}>
                <label className="text-lg">Plan de salud</label>
                <select className={inputActive} {...register("CC")}>
                  <option> </option>
                  <option>Básico</option>
                  <option>Complementario</option>
                </select>
              </div>
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Informacion Medica</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Tipo de Sangre</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("CC")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Vacunas</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("CC")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Alergias</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("alergias")}
                />
              </div>
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Direccion de Residencia</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Direccion de Domicilio</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("direccion")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Telefono</label>
                <input
                  className={inputActive}
                  placeholder="Escribir..."
                  {...register("telefonoUsuario")}
                />
              </div>
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">
                Datos de Contacto de emergencia
              </h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres Completos</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Nombres..."
                  {...register("contacto_emergencia_nombre")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Relación con el paciente</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Parentezco..."
                  {...register("contacto_emergencia_parentesco")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Telefono de emergencia..."
                  {...register("contacto_emergencia_telefono")}
                />
              </div>
            </div>
          </section>
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Informacion de Contacto</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("CC")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Correo electrónico</label>
                <input
                  className={inputActive}
                  type="email"
                  placeholder="Escribir..."
                  {...register("emailUsuario")}
                />
              </div>
            </div>
          </section>
          <div className="grid justify-items-end w-full">
            <button className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2] hover:bg-gradient-to-r text-white text-2xl py-2 px-4 rounded-lg">
              Confirmar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
export default OperatorRegister;
