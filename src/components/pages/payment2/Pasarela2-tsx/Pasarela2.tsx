import React from 'react';
import { useLocation } from 'react-router-dom';

const Pasarela2: React.FC = () => {
    const location = useLocation();
    const { paymentNumber, holderName, identification, bank, totalPayment } = location.state || {};

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 p-4 text-center"></header>
            <div className="flex justify-center items-center flex-grow bg-white">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-green-600 text-2xl font-bold text-center mb-6 uppercase">
                        Proceso de Pago Completado
                    </h2>
                    <div className="info mb-4">
                        <label className="font-semibold">Número de Pago: {paymentNumber || 'DRP4613'} </label>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Titular: {holderName || 'Juan Angel Gomez Bueno'}</label>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Número de Identificación: {identification || '1097489135'}</label>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Banco: {bank || 'Bancolombia'}</label>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Total del Pago: {totalPayment || '820.000$'}</label>
                    </div>
                    <button 
                        onClick={() => alert('Gracias por su pago!')} 
                        className="mt-6 w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>

        
    );
};

export default Pasarela2;
