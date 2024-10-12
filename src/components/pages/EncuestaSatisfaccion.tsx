import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Satisfaccion = ({ onClose }) => {
  const [rating, setRating] = useState(0); // For star ratings
  const [satisfactionLevel, setSatisfactionLevel] = useState(0); // For satisfaction level
  const {register , handleSubmit} = useForm()

  const onSubmit = handleSubmit(async (data) => {

  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-11/12 bg-[#F7F7F7] p-6 flex flex-col justify-center items-start rounded-xl border-[#4F7594] shadow-lg sm:w-2/3 lg:w-2/5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-[#0F6AEF] text-xl font-bold mb-4">
          Encuesta de Satisfacción
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Tu opinión es importante para nosotros. Por favor, llena este breve formulario.
        </p>
        <form className="w-full" action="">
          {/* Star Rating */}
          <div className="mb-4 w-full">
            <label className="text-gray-600 text-sm block mb-1 font-semibold">
              Puntua tu experiencia con los servicios de  SanaVit</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-3xl focus:outline-none transition-colors duration-300 ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Satisfaction Question */}
          <div className="mb-4 w-full">
            <label className="text-gray-600 text-sm block mb-1 font-semibold">
              ¿Qué tan satisfecho estás con nuestro servicio?
            </label>
            <div className="flex justify-between mt-2">
              {["Muy insatisfecho", "Insatisfecho", "Neutral", "Satisfecho", "Muy satisfecho"].map((label, index) => (
                <div key={label} className="flex flex-col items-center">
                  <input
                    type="radio"
                    id={label}
                    name="satisfaction"
                    value={index + 1}
                    className="sr-only peer"
                    checked={satisfactionLevel === index + 1} // Check if this level is selected
                    onChange={() => setSatisfactionLevel(index + 1)} // Update satisfaction level on change
                  />
                  <label
                    htmlFor={label}
                    className={`cursor-pointer flex flex-col items-center transition-colors duration-300 
                      ${satisfactionLevel === index + 1 ? "text-blue-600" : "text-gray-600"}`}
                  >
                    <span className="text-xl mb-2">
                      {["😠", "🙁", "😐", "🙂", "😄"][index]}
                    </span>
                    <span className="hidden sm:block text-xs">{label}</span>
                    <span className="block sm:hidden">•</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Fields */}
          <div className="mb-4 w-full">
            <label className="text-gray-600 text-sm block mb-1 font-semibold">
              ¿Cuál de estas opciones consideras que se necesita mejorar?
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
              <option value="" disabled>Selecciona un área</option>
              <option value="Product Quality">Calidad de productos</option>
              <option value="Customer Service">Atención al cliente</option>
              <option value="Website Usability">Navegación del Sitio Web</option>
              <option value="Pricing">Valor del servicio</option>
              <option value="Delivery Speed">Velocidad de atención</option>
            </select>
          </div>

          {/* Comments */}
          <div className="mb-4 w-full">
            <label className="text-gray-600 text-sm block mb-1 font-semibold">
              Comentarios adicionales
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows={3}
              placeholder="Déjanos tus comentarios"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-[#0F6AEF] text-white px-4 py-2 rounded-md hover:bg-blue-800 text-sm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Satisfaccion;
