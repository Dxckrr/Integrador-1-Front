// Pasarela2.tsx
import React from 'react';

interface PaymentInfoProps {
    paymentNumber: string;
    holderName: string;
    identification: string;
    bank: string;
    totalPayment: string;
}

const Pasarela2: React.FC<PaymentInfoProps> = ({
    paymentNumber,
    holderName,
    identification,
    bank,
    totalPayment,
}) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 p-4 text-center">
            </header>
            <div className="flex justify-center items-center flex-grow bg-white">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-green-600 text-2xl font-bold text-center mb-6 uppercase">
                        Proceso de Pago Completado
                    </h2>
                    <div className="info mb-4">
                        <label className="font-semibold">Número de Pago: DRP4613 </label>
                        <div className="text-gray-700">{paymentNumber}</div>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Titular: Juan Angel Gomez Bueno</label>
                        <div className="text-gray-700">{holderName}</div>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Número de Identificación: 1097489135 </label>
                        <div className="text-gray-700">{identification}</div>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Banco: Bancolombia</label>
                        <div className="text-gray-700">{bank}</div>
                    </div>
                    <div className="info mb-4">
                        <label className="font-semibold">Total del Pago: 820.000$</label>
                        <div className="text-gray-700">{totalPayment}</div>
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