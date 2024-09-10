import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 mr-10 mt-5"

function SimpleTableCancelation() {
    const [data, setData] = useState([
        {
            type: "Ortopedia",
            medicName: "Carlos Sainz",
            dateTime: "2024/09/10 - 5:00pm",
            id: "792710",
            pacientFullName: "John Doe",
        },
    ]);

    const navigate = useNavigate()
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const columns = [
        {
            header: "Tipo",
            accessorKey: "type",
        },
        {
            header: "Especialista",
            accessorKey: "medicName",
        },
        {
            header: "Fecha y Hora",
            accessorKey: "dateTime",
        },
        {
            header: "Cita ID",
            accessorKey: "id",
        },
        {
            header: "Paciente",
            accessorKey: "pacientFullName",
        },
    ];
    

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        // onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });


    return (
        <div className="flex flex-col justify-center">
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Documento</label>
                <input className={inputActive} type="text" name={"Documento"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">ID Cita</label>
                <input className={inputActive} type="text" name={"IDCita"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Fecha</label>
                <input className={inputActive} type="date" name={"Fecha"} placeholder="Escribir..."/>
              </div>
            </div>
            <hr className="border-t border-gray-700 my-10"></hr>
            <div className="overflow-x-auto border border-secondaryGray rounded-xl ">
                <table className="table-auto w-full">
                    <thead className="bg-[#F2F2F2]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
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
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="border px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={() => table.previousPage()}
                    className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-500">
                    {"<"}
                </button>
                <button
                    onClick={() => table.nextPage()}
                    className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-500">
                    {">"}
                </button>
            </div>
        </div>


    );
}

export default SimpleTableCancelation;