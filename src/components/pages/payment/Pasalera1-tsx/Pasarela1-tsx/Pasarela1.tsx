import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LOGO_IPS from "../../../../../assets/img/logos/LogoSanavit(Pequeño).png";
import Footer from '../../../../ui/global/Footer';

const PaymentGateway: React.FC = () => {
    const location = useLocation();
    const { paymentMethod } = location.state || {}; // Recibes el método de pago desde PaymentOptions
    const [formData, setFormData] = useState({
        holderName: '',
        holderAddress: '',
        identification: '',
        phone: '',
        identificationType: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Redirigir a la ruta /payment2 con los datos del formulario
        navigate('/payment2', { state: formData });
    };

    return (
        <>
            <main className="h-screen flex flex-col">
                <div className="flex-grow flex flex-col items-center bg-gray-100">
                    <header className="w-full bg-blue-600 text-white p-4">
                        <div className="flex items-center justify-center">
                            <img src={LOGO_IPS} alt="Logo de la Empresa" className="w-64 h-24" />
                        </div>
                    </header>

                    <div className="flex-1 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
                            <h2 className="text-center text-blue-600 text-xl mb-6">Pasarela de Pago</h2>
                            <p>Método de Pago Seleccionado: {paymentMethod}</p> {/* Mostrando el método seleccionado */}
                            <form id="paymentForm" onSubmit={handleSubmit}>
                                <div className="flex">
                                    <div className="flex-1 mr-4">
                                        <div className="mb-4">
                                            <label htmlFor="holderName" className="block mb-1">Nombre y Apellidos</label>
                                            <input
                                                type="text"
                                                id="holderName"
                                                value={formData.holderName}
                                                onChange={handleInputChange}
                                                placeholder="Nombre Apellido"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="holderAddress" className="block mb-1">Dirección del Titular:</label>
                                            <input
                                                type="text"
                                                id="holderAddress"
                                                value={formData.holderAddress}
                                                onChange={handleInputChange}
                                                placeholder="Dirección"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="identification" className="block mb-1">N° Identificación:</label>
                                            <input
                                                type="text"
                                                id="identification"
                                                value={formData.identification}
                                                onChange={handleInputChange}
                                                placeholder="Identificación"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="phone" className="block mb-1">Celular:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="XXXXXXXXX"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="identificationType" className="block mb-1">Tipo de Identificación:</label>
                                            <select
                                                id="identificationType"
                                                value={formData.identificationType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            >
                                                <option value="">Seleccione un tipo</option>
                                                <option value="cc">Cédula de Ciudadanía</option>
                                                <option value="ce">Cédula de Extranjería</option>
                                                <option value="pasaporte">Pasaporte</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex-1 ml-4">
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block mb-1">Correo Electrónico:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="ejemplo@correo.com"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="cardNumber" className="block mb-1">Número de Tarjeta:</label>
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="XXXX-XXXX-XXXX-XXXX"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="expiryDate" className="block mb-1">Fecha de Vencimiento:</label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                placeholder="MM/AA"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="cvv" className="block mb-1">Código de Seguridad (CVV):</label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                placeholder="XXX"
                                                required
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                                >
                                    Pagar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="w-full text-white text-center">
                    <Footer />
                </footer>
            </main>
        </>
    );
};

export default PaymentGateway;
