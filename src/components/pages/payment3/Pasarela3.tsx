import React from 'react';

const PaymentOptions: React.FC = () => {
    return (
        <div className="payment-container flex flex-col items-center h-screen bg-gray-50">
            <header className="w-full bg-blue-700 text-white p-6 text-center shadow-lg">
                <h1 className="text-3xl font-bold">Proceso de Pago</h1>
                <p className="mt-2">Seleccione su método de pago</p>
            </header>
            
            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full">
                    <h2 className="text-center text-blue-600 text-2xl mb-6 font-semibold">Opciones de Pago</h2>
                    <form id="paymentForm">
                        <ul className="space-y-4">
                            {['Nueva tarjeta de débito', 'Nueva tarjeta de crédito', 'Transferencia con PSE', 'Efecty'].map((option) => (
                                <li key={option} className="flex items-center p-3 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
                                    <input type="radio" id={option} name="paymentMethod" value={option} className="mr-3" />
                                    <label htmlFor={option} className="cursor-pointer">{option}</label>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-gray-600">Aprobación inmediata</p>
                        <button type="submit" className="w-full mt-6 p-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200">Continuar</button> 
                    </form>
                </div>
            </div>

            <div className="service-summary bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mt-6">
                <h2 className="text-center text-blue-600 text-xl mb-6 font-semibold">Resumen de Información</h2>
                <p><strong>Tipo de servicio:</strong> Revisión Médica</p>
                <p><strong>Tipo de pago:</strong> Transferencia</p>
                <p><strong>Nombre del paciente:</strong> Juan Angel Gomez Bueno</p>
            </div>

            <footer className="w-full bg-gray-200 text-center p-4 mt-auto">
                <p className="text-sm text-gray-600">© 2024 IPS Nombre de la Institución. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default PaymentOptions;