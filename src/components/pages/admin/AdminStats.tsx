import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import useStadistics from "../../../hooks/admin/useStadistics";

/**
Contains the page to view the stats
@returns {Component} AdminStats
*/
const AdminStats = () => {
  const { data } = useStadistics();
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
            {/* <Card
              //   icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Total Claims"
              value="1,234"
              change="+20.1%"
            /> */}
            {/* <Card
              //   icon={<DollarSign className="h-8 w-8 text-green-500" />}
              title="Total Amount Claimed"
              value="$420,000"
              change="+15.5%"
            />
            <Card
              //   icon={<PieChart className="h-8 w-8 text-purple-500" />}
              title="Average Claim Amount"
              value="$340"
              change="-2.5%"
            />
            <Card
              //   icon={<Clock className="h-8 w-8 text-yellow-500" />}
              title="Pending Claims"
              value="89"
              change="+4.7%"
            />
            <Card
              //   icon={<Users className="h-8 w-8 text-indigo-500" />}
              title="Active Policyholders"
              value="5,678"
              change="+3.2%"
            />
            <Card
              //   icon={<Activity className="h-8 w-8 text-red-500" />}
              title="Claims Processed Today"
              value="142"
              change="+12.7%"
            />
            <Card
              //   icon={<AlertCircle className="h-8 w-8 text-orange-500" />}
              title="High-Value Claims"
              value="23"
              change="-5.8%"
            />
            <Card
              //   icon={<CalendarIcon className="h-8 w-8 text-teal-500" />}
              title="Avg. Processing Time"
              value="3.2 days"
              change="-8.3%"
            /> */}
          </div>

          {/* <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Claims</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claim ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <ClaimRow id="CLM001" date="2023-06-15" type="Medical" amount={1200} status="Approved" />
              <ClaimRow id="CLM002" date="2023-06-14" type="Dental" amount={350} status="Pending" />
              <ClaimRow id="CLM003" date="2023-06-13" type="Vision" amount={200} status="Approved" />
              <ClaimRow id="CLM004" date="2023-06-12" type="Pharmacy" amount={75} status="Rejected" />
              <ClaimRow id="CLM005" date="2023-06-11" type="Medical" amount={2500} status="Under Review" />
            </tbody>
          </table>
        </div>
      </div> */}
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

// function ClaimRow({ id, date, type, amount, status }: { id: string; date: string; type: string; amount: number; status: string }) {
//   const statusColor = {
//     Approved: 'text-green-600 bg-green-100',
//     Pending: 'text-yellow-600 bg-yellow-100',
//     Rejected: 'text-red-600 bg-red-100',
//     'Under Review': 'text-blue-600 bg-blue-100',
//   }[status]

//   return (
//     <tr>
//       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${amount.toLocaleString()}</td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
//           {status}
//         </span>
//       </td>
//     </tr>
//   )
// }
