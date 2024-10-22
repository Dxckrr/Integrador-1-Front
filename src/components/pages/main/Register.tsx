import { useState } from "react";
import LOGO from "../../../assets/img/logos/LogoSanavit(Pequeño).png";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (passwordError) {
      setPasswordError('');
    }
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return false;
    }
    if (formData.password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (validatePasswords()) {
      console.log('Formulario válido, procediendo con el registro');
    } else {
      console.log('Error en el formulario, no proceder');
    }
  };

  return (
    <>
        <div className="bg-white shadow-customNav h-16 fixed top-0 left-0 right-0 z-10 flex justify-center items-center">
            <Link to="/">
                <div className="m-4">
                    <img src={LOGO} alt="Logo Sanavit" className="h-14" />
                </div>
            </Link>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#EFF0F1]">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-customCard relative">

            <h1 className="text-2xl font-bold text-center mb-6">Registro de Usuario</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
            <section>
                <h2 className="text-xl font-semibold mb-3">Información Personal</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Nombres y Apellidos
                    </label>
                    <input
                    id="fullName"
                    type="text"
                    placeholder="Nombres y apellidos completos"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="idDocument" className="block text-sm font-medium text-gray-700">
                    Documento de Identidad
                    </label>
                    <input
                    id="idDocument"
                    type="text"
                    placeholder="Número de documento"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Género
                    </label>
                    <select
                    id="gender"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                    </label>
                    <input
                    id="phone"
                    type="tel"
                    placeholder="Número de teléfono"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">Dirección de Residencia</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Dirección de Domicilio
                    </label>
                    <input
                    id="address"
                    type="text"
                    placeholder="Dirección completa"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Departamento
                    </label>
                    <input
                    id="department"
                    type="text"
                    placeholder="Departamento"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Ciudad
                    </label>
                    <input
                    id="city"
                    type="text"
                    placeholder="Ciudad"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">Datos de Contacto de Emergencia</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                    Nombres Completos
                    </label>
                    <input
                    id="emergencyContact"
                    type="text"
                    placeholder="Nombre del contacto de emergencia"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
                    Parentesco
                    </label>
                    <input
                    id="relationship"
                    type="text"
                    placeholder="Relación con el contacto"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">
                    Número de teléfono
                    </label>
                    <input
                    id="emergencyPhone"
                    type="tel"
                    placeholder="Teléfono de emergencia"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    placeholder="Ingrese su contraseña"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                </div>
                <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirmar Contraseña
                </label>
                <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"               
                    value={formData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirme su contraseña"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                </div>
            </div>

            {/* Mostrar error si las contraseñas no coinciden */}
            {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}

            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Registrarse
            </button>
            </form>
        </div>
        </div>
    </>
  );
};

export default Register;
