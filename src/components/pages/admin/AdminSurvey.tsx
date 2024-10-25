import useSatisfaction from "../../../hooks/admin/useSatisfaction";

/**
Contains the page to manage the satisfaction survey
@returns {Component} AdminStats
**/
export default function SurveyDataDashboard() {
  const { data } = useSatisfaction();
  if (!data) {
    return <div>Cargando...</div>; // Opcional: muestra un loading mientras se obtienen los datos
  }

  const maxValue = Math.max(...data.satisfactionDistribution);
  const maxImprovementValue = Math.max(
    ...data.improvementAreas.map((area) => area.value)
  );

  return (
    <main className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-white to-[#EFF0F1]">
      <div className="container mx-auto p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Resultados de la encuesta de satisfacción
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              Total de respuestas
            </h2>
            <p className="text-4xl font-bold text-blue-600">
              {data.totalResponses}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              Evaluación Promedio
            </h2>
            <p className="text-4xl font-bold text-green-600">
              {data.averageSatisfaction} /{" "}
              <span className="text-2xl">{data.totalResponses * 5}</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              Recomendaciones
            </h2>
            <p className="text-4xl font-bold text-purple-600">
              {data.npsScore}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Distribución de la satisfacción
            </h2>
            <div className="flex items-end h-64 space-x-2">
              {data.satisfactionDistribution.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center relative group">
                  <div
                    className="w-full bg-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-600"
                    style={{ height: `${(value / maxValue) * 100}px` }}></div>
                  <span className="text-sm mt-2">
                    {["😠", "🙁", "😐", "🙂", "😄"][index]}
                  </span>
                  {/* Tooltip to show exact value on hover */}
                  <span className="absolute bottom-full mb-1 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                    {value} responses
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Areas que necesitan mejora
            </h2>
            <div className="space-y-2">
              {data.improvementAreas.map((area) => (
                <div key={area.name} className="flex items-center">
                  <span className="w-32 text-sm">{area.name}</span>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${(area.value / maxImprovementValue) * 100}%`,
                      }}></div>
                  </div>
                  <span className="ml-2 text-sm font-semibold">
                    {area.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Comentarios Recientes
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-gray-600">
                    Calificación
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Comentario
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.recentFeedback.map((feedback) => (
                  <tr key={feedback.id} className="border-b">
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-1">{feedback.rating}</span>
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                    <td className="px-4 py-2">{feedback.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
