import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import {
  useAppointmentStadistic,
  useStadistics,
} from "../../../hooks/admin/useStadistics";
import AppointmentGraphic from "../../ui/admin/AppointmentGraphic";

/**
Contains the page to view the stats
@returns {Component} AdminStats
*/
const AdminStats = () => {
  const { data } = useStadistics();
  const { labels, totalIncome } = useAppointmentStadistic();
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1]">
        <div className="container mx-auto p-4 min-h-screen">
          <h1 className="flex items-center text-3xl font-bold mb-6 text-gray-800">
            Panel de Control{" "}
            <PresentationChartBarIcon className="size-8 ml-6" />
          </h1>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
              <Card
                //   icon={<FileText className="h-8 w-8 text-blue-500" />}
                title={item.title}
                value={item.value}
                sub={item.sub}
                icon={item.icon}
              />
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Citas Agendadas
            </h2>
            <div className="mt-6 container mx-auto px-32 py-10 h-96">
              <AppointmentGraphic
                appointmentsData={totalIncome}
                labels={labels}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminStats;

function Card({
  icon,
  title,
  value,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-start">
        {icon} {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-2">{sub}</p>
    </div>
  );
}
