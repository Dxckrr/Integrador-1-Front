import { useState } from "react";
import LOGO_IPS from "../../../assets/img/logos/LogoSanavit(Pequeño).png";
import EstadisticGraphic from "../../ui/admin/EstadisticGraphic";
import { services } from "../../../utils/data/services";

/**
Contains the page to manage the finances of the ips
@returns {Component} AdminStats
*/
const AdminFinances = () => {
  const [service, setService] = useState<string | null>(null);
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1]">
        <section className="grid grid-cols-4 gap-x-4 gap-y-10 p-12 container mx-auto">
          <div className="col-span-3 bg-white p-4 shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">Facturación</h2>
              <div className="flex space-x-4">
                <select
                  className="border border-gray-300 rounded-md p-1"
                  value={service || ""} // Ensure the select is controlled
                  onChange={(e) => setService(e.target.value)} // Use onChange instead of onSelect
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <EstadisticGraphic service={service} />
            </div>
          </div>

          <div className="p-4">
            <div className="bg-white shadow-md p-6 rounded-md ">
              <h2 className="text-3xl font-semibold">Ver registro de pagos</h2>
              <div className="mt-2">
                <p>Pagos realizados en</p>
                <select className="border border-gray-300 rounded-md p-1 mb-2">
                  <option>Mes actual (Septiembre)</option>
                </select>
                <ul className="space-y-1">
                  <li>$11,905 - 14/09/2024</li>
                  <li>$11,905 - 14/09/2024</li>
                  <li>$11,905 - 14/09/2024</li>
                </ul>
              </div>
            </div>

            <button className="mt-4 bg-blue-500 text-white py-1 px-3 rounded-md w-full">
              Detallar
            </button>
          </div>

          <div className="col-span-3 bg-white p-4 shadow-md">
            <h2 className="text-3xl font-semibold">Nómina general</h2>
            <p>Salarios de empleados</p>
            <p className="mt-2">
              Operadores: <span className="font-bold">$15.500.000</span>
            </p>
          </div>
          <aside className="flex items-center justify-center p-4">
            {/* <img
              src={LOGO_IPS}
              alt="IPS_LOGO"
              className="object-contain scale-75"
            /> */}
            <h1>John Doe</h1>
          </aside>
        </section>
      </main>
    </>
  );
};
export default AdminFinances;
