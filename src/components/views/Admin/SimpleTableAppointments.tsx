import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { get_cv_userPDF } from "../../../services/core/users.service";
import { get_all_appointments_by_id } from "../../../services/core/appointments.service";

const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 mr-10 mt-5"
interface SimpleTableAppointmentsProps {
    idUser: number;
}

function SimpleTableAppointments({ idUser }: SimpleTableAppointmentsProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataF = async () => {
            try {
                const res = await get_all_appointments_by_id(idUser);
                console.log("res: ", res)         
                res.map((item: any) => {
                    // const service = services.find(
                    //   (serviceItem) => serviceItem.id === item.type
                    // );
                    // item.type = service?.title; AHORA TOCARIA HACER UN CAMBIO POR AQUI
                    item.id = item.id.toString();
                  });
                  setData(res);
            } catch (error) {
                console.log(error);
            }
        }
        dataF()
    }, [idUser])


    const columns = [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Dia",
            accessorKey: "date",
        },
        {
            header: "Especialidad",
            accessorKey: "nombreServicio",
        },
        {
            header: "Médico",
            accessorKey: "medicName",
        },
        {
            header: "Historia clinica",
            accessorKey: "historiaClinica",
            cell: () => (
                <button onClick={() => get_cv_userPDF("a", 3)} className="group-hover:border-white border-black border rounded-full px-3 py-1 shadow-customButton hover:bg-white hover:text-black">Ver historia</button>
            )
        },
    ];
    
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    interface ColumnFilter {
        id: string
        value: unknown
    }
    type ColumnFiltersState = ColumnFilter[]
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
    });
    const handleFilterChange = (id: string, value: string) => {
        setColumnFilters((prevFilters) => {
            const existingFilterIndex = prevFilters.findIndex(filter => filter.id === id);
            // Si el filtro ya existe, actualízalo
            if (existingFilterIndex > -1) {
                const updatedFilters = [...prevFilters];
                updatedFilters[existingFilterIndex] = { id, value };
                return updatedFilters;
            }
            // Si el filtro no existe, agrégalo
            return [...prevFilters, { id, value }];
        });
    };

    return (
        <div className="flex flex-col justify-center">
            <div className="flex">
                <div className={div}>
                    <label className="text-lg">ID</label>
                    <input className={inputActive} type="text" name={"id"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'id')?.value as string || ''}
                        onChange={(e) => handleFilterChange('id', e.target.value)}/>
                </div>
                <div className={div}>   
                    <label className="text-lg">Fecha</label>
                    <input className={inputActive} type="date" name={"fecha"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'date')?.value as string || ''}
                        onChange={(e) => handleFilterChange('date', e.target.value)}/>
                </div>
                <div className={div}>
                    <label className="text-lg">Médico</label>
                    <input className={inputActive} type="text" name={"medico"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'medicName')?.value as string || ''}
                        onChange={(e) => handleFilterChange('medicName', e.target.value)}/>
                </div>
            </div>
            <hr className="border-t border-gray-700 mt-10 mb-5"></hr>
            <div className="flex justify-center mb-5">
                <h1 className="text-xl font-bold">Citas</h1>
            </div>
            <div className="overflow-x-auto border border-secondaryGray rounded-xl ">
                <table className="table-auto w-full">
                {/* bg-[#F2F2F2] */}
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
                            <tr key={row.id} className="group hover:bg-primary-blue hover:text-white">
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
            <div className="flex justify-between items-center mt-4 space-x-4">
                <div className="w-28"></div>
                <div className="space-x-4">
                    <button
                        onClick={() => table.previousPage()}
                        className={(table.getCanPreviousPage()) ? "px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-500" : "px-4 py-2 bg-black opacity-20 text-white rounded"}>
                        {"<"}
                    </button>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className={(table.getCanNextPage()) ? "px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-500" : "px-4 py-2 bg-black opacity-20 text-white rounded"}>
                        {">"}
                    </button>
                </div>
                <span className="w-28 italic">
                    Página <span className="not-italic font-medium">{table.getState().pagination.pageIndex + 1}</span> de <span className="not-italic font-medium">{table.getPageCount()}</span>
                </span>
            </div>
            
        </div>
    );
}

export default SimpleTableAppointments;