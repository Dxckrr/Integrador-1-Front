import React, { useState } from 'react';

const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 pr-10 mt-5"

const AdminEditPacient = () => {
    const [userId, setUserId] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const handleSearch = () => {
        // Simulación de búsqueda de usuario
        setUserInfo({
            id: userId,
            nombre: 'Juan Pérez',
            email: 'juan@example.com',
            rol: 'Médico'
        });
    };

    return (
        <>
            <main className='min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] pb-10'>
                <div className="p-6 w-4/5">
                    <div className="p-6 bg-white rounded-lg shadow-customButton">
                        <h2 className="text-2xl font-bold mb-4">Modificar Usuario</h2>
                        <div className="">
                            <input
                                type="text"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder="Ingrese ID de usuario"
                                className="w-full p-2 border rounded"
                            />
                            <button
                                onClick={handleSearch}
                                className='mt-4 bg-primary-blue hover:bg-blue-500 text-white  py-2 px-4 rounded-lg'
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                    {userInfo && (
                        <form className="py-5">

                            <section className="mt-5 mb-11">
                                <div className={div}>
                                    <label className="text-lg">Estado usuario</label>
                                    <select className={inputActive} name={"estado"}>
                                        <option>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
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
                                        <input className={inputActive} type="text" name={"EPS"} placeholder="Escribir..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Departamento</label>
                                        <input className={inputActive} type="text" name={"NumAfiliacion"} placeholder="Escribir..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Ciudad</label>
                                        <input className={inputActive} type="text" name={"TipoAfiliacion"} placeholder="Escribir..." />
                                    </div>
                                </div>
                            </section>

                            <section className="mb-11">
                                <div>
                                    <h2 className="font-normal text-lg">Datos de Contacto de emergencia</h2>
                                    <hr className="border-t border-gray-700"></hr>
                                </div>
                                <div className="flex">
                                    <div className={div}>
                                        <label className="text-lg">Nombres Completos</label>
                                        <input className={inputActive} type="text" name={"NombresContactoEmergencia"} placeholder="Nombres..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Parentezco</label>
                                        <input className={inputActive} type="text" name={"ParentezcoContactoEmergencia"} placeholder="Parentezco..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Número de teléfono</label>
                                        <input className={inputActive} type="text" name={"TelefonoContactoEmergencia"} placeholder="Telefono   de emergencia..." />
                                    </div>
                                </div>
                                <div className={div}>
                                    <label className="text-lg">Relación del paciente</label>
                                    <input className={inputActive} type="text" name={"RelacionConPaciente"} placeholder="Escribir..." />
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
                                        <input className={inputActive} type="text" name={"Telefono"} placeholder="Escribir..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Correo electrónico</label>
                                        <input className={inputActive} type="email" name={"Correo electronico"} placeholder="Escribir..." />
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
                                        <label className="text-lg">Vacunas</label>
                                        <input className={inputActive} type="text" name={"NumAfiliacion"} placeholder="Escribir..." />
                                    </div>
                                    <div className={div}>
                                        <label className="text-lg">Alergias</label>
                                        <input className={inputActive} type="text" name={"TipoAfiliacion"} placeholder="Escribir..." />

                                    </div>
                                </div>

                            </section>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
};

export default AdminEditPacient;