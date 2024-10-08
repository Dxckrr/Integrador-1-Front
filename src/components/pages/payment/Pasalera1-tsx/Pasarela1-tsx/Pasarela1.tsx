import React from 'react';

const PaymentGateway: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Formulario enviado');
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <header className="w-full bg-blue-600 text-white p-4">
                <div className="flex items-center justify-center">
                    <img src="logo.png" alt="Logo de la Empresa" className="w-64 h-24" />
                </div>
            </header>

            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
                    <h2 className="text-center text-blue-600 text-xl mb-6">Pasarela de Pago</h2>
                    <form id="paymentForm" onSubmit={handleSubmit}>
                        <div className="flex">
                            {/* Columna izquierda */}
                            <div className="flex-1 mr-4">
                                <div className="mb-4">
                                    <label htmlFor="holderName" className="block mb-1">Nombre y Apellidos</label>
                                    <input type="text" id="holderName" placeholder="Nombre Apellido" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="holderAddress" className="block mb-1">Dirección del Titular:</label>
                                    <input type="text" id="holderAddress" placeholder="Dirección" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="identification" className="block mb-1">N° Identificación:</label>
                                    <input type="text" id="identification" placeholder="Identificación" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block mb-1">Celular:</label>
                                    <input type="tel" id="phone" placeholder="XXXXXXXXX" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="identificationType" className="block mb-1">Tipo de Identificación:</label>
                                    <select id="identificationType" required 
                                        className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">Seleccione un tipo</option>
                                        <option value="cc">Cédula de Ciudadanía</option>
                                        <option value="ce">Cédula de Extranjería</option>
                                        <option value="pasaporte">Pasaporte</option>
                                    </select>
                                </div>
                            </div>

                            {/* Columna derecha */}
                            <div className="flex-1 ml-4">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1">Correo Electrónico:</label>
                                    <input type="email" id="email" placeholder="ejemplo@correo.com" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cardNumber" className="block mb-1">Número de Tarjeta:</label>
                                    <input type="text" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="expiryDate" className="block mb-1">Fecha de Vencimiento:</label>
                                    <input type="text" id="expiryDate" placeholder="MM/AA" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cvv" className="block mb-1">Código de Seguridad (CVV):</label>
                                    <input type="text" id="cvv" placeholder="XXX" required 
                                        className="w-full p-2 border border-gray-300 rounded" />
                                </div> 
                            </div> 
                        </div>

                        {/* Botón para enviar el formulario */}
                        <button type="submit"
                            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">Pagar</button> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;