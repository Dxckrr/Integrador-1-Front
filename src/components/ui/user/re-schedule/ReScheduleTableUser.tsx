import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { get_all_appointments_by_id } from "../../../../services/core/appointments.service";
import { services } from "../../../../utils/data/services";
import { useAuth } from "../../../../context/auth/AuthContext";
import { useStepperContext } from "../../../../context/re-schedule/ReScheduleStepperContext";

function ReScheduleTableUser() {
  const [data, setData] = useState([]);
  const { userLogin } = useAuth();
  const [selectedRow, setSelectedRow] = useState<any | null>(null); // Estado para la fila seleccionada
  const { setValue, setAppointment } = useStepperContext();

  useEffect(() => {
    const dataF = async () => {
      try {
        const res = await get_all_appointments_by_id(userLogin.user.CC);
        res.map((item: any) => {
          const service = services.find(
            (serviceItem) => serviceItem.id === item.type
          );
          item.type = service?.title;
          item.id = item.id.toString();
        });
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    dataF();
  }, [userLogin]);
  const columns = [
    { header: "Fecha", accessorKey: "date" },
    { header: "Hora", accessorKey: "time" },
    { header: "Cita ID", accessorKey: "id" },
    { header: "Especialista", accessorKey: "medicName" },
    { header: "Tipo", accessorKey: "type" },
  ];
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
  });

  // Función para manejar el clic en una fila completa
  const handleRowClick = (rowData: any) => {
    setSelectedRow(rowData); // Set data from row => setValue (row)  <- useContext()
    setValue("id", rowData.id);
    setAppointment(rowData);
    alert(`Has hecho clic en la fila con ID de cita: ${rowData.id}`);
  };

  return (
    <div className="flex flex-col justify-center">
      <hr className="border-t border-gray-700 my-10"></hr>
      <div
        className="overflow-y-auto border border-secondaryGray rounded-xl"
        style={{ maxHeight: "500px" }}>
        <table className="table-auto w-full">
          <thead className="bg-[#F2F2F2]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left cursor-pointer">
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-primary-blue hover:text-white cursor-pointer ${
                  selectedRow?.id === row.original.id
                    ? "bg-blue-500 text-white"
                    : ""
                }`} // Estilo para la fila seleccionada
                onClick={() => handleRowClick(row.original)} // Manejar clic
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border px-4 py-2 w-9">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReScheduleTableUser;
