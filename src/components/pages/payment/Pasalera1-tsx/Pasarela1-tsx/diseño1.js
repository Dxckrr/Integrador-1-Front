import React from 'react';


const PaymentGateway = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <header className="w-full bg-blue-600 text-white p-4">
                <div className="flex items-center">
                    <img src= {LogoSanavit(Pequeño).png} alt="Logo de la Empresa" className="w-64 h-24 mr-24" />
                </div>
            </header>

            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
                    <h2 className="text-center text-blue-600 text-xl mb-6">Pasarela de Pago</h2>
                    <form id="paymentForm">
                        <div className="flex">
                            {/* Columna izquierda */}
                            <div className="flex-1 mr-15">
                                {['holderName', 'holderAddress', 'identification', 'phone'].map((field) => (
                                    <div className="mb-4" key={field}>
                                        <label htmlFor={field} className="block mb-1">{field === 'holderName' ? 'Nombre y Apellidos' : field}</label>
                                        <input 
                                            type={field === 'phone' ? 'tel' : 'text'} 
                                            id={field} 
                                            placeholder={field === 'holderName' ? 'Nombre Apellido' : field} 
                                            required 
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                ))}
                                <div className="mb-4">
                                    <label htmlFor="identificationType" className="block mb-1">Tipo de Identificación:</label>
                                    <select id="identificationType" required className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">Seleccione un tipo</option>
                                        <option value="cc">Cédula de Ciudadanía</option>
                                        <option value="ce">Cédula de Extranjería</option>
                                        <option value="pasaporte">Pasaporte</option>
                                    </select>
                                </div>
                            </div>

                            {/* Columna derecha */}
                            <div className="flex-1">
                                {['email', 'cardNumber', 'expiryDate', 'cvv'].map((field) => (
                                    <div className="mb-4" key={field}>
                                        <label htmlFor={field} className="block mb-1">{field === 'cardNumber' ? 'Número de Tarjeta' : field}</label>
                                        <input 
                                            type={field === 'email' ? 'email' : 'text'} 
                                            id={field} 
                                            placeholder={field === 'expiryDate' ? 'MM/AA' : (field === 'cvv' ? 'XXX' : '')} 
                                            required 
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                ))}
                            </div> 
                        </div>

                        {/* Botón para enviar el formulario */}
                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">Pagar</button> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;