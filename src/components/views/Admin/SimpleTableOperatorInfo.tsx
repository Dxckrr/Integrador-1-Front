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
import { get_all_doctors, get_cv_userPDF } from "../../../services/core/users.service";
import { services } from "../../../utils/data/services";
import { PencilIcon } from "@heroicons/react/24/solid";

const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 mr-10 mt-5"

function SimpleTableOperatorInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataF = async () => {
            try {
                const res = await get_all_doctors(2);
                console.log("res: ", res)         
                setData(res.user)
            } catch (error) {
                console.log(error);
            }
        }
        dataF()
    }, [])


    const columns = [
        {
            header: "Nombres",
            accessorKey: "nombreUsuario",
        },
        {
            header: "Apellidos",
            accessorKey: "apellidoUsuario",
        },
        {
            header: "Documento",
            accessorKey: "CC",
        },
        {
            header: "Email",
            accessorKey: "emailUsuario",
        },
        {
            header: "Hoja de vida",
            accessorKey: "cv",
            cell: () => (
                <button onClick={() => get_cv_userPDF("a", 3)} className="group-hover:border-white border-black border rounded-full px-3 py-1 shadow-customButton hover:bg-white hover:text-black">Ver hoja de vida</button>
            )
        },
        {
            header: "Editar",
            cell: () => (
                <>
                    <button className="group-hover:border-white transform transition-transform duration-300 hover:scale-105 border-black border rounded-full px-3 py-1 shadow-customButton hover:bg-white hover:text-black flex">
                        <PencilIcon className="size-5 mr-2"/>
                        Editar
                    </button>
                </>
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
                    <label className="text-lg">Documento</label>
                    <input className={inputActive} type="text" name={"Documento"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'CC')?.value as string || ''}
                        onChange={(e) => handleFilterChange('CC', e.target.value)}/>
                </div>
                <div className={div}>   
                    <label className="text-lg">Nombre</label>
                    <input className={inputActive} type="text" name={"Nombres"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'nombreUsuario')?.value as string || ''}
                        onChange={(e) => handleFilterChange('nombreUsuario', e.target.value)}/>
                </div>
                <div className={div}>
                    <label className="text-lg">Apellido</label>
                    <input className={inputActive} type="text" name={"Apellidos"} placeholder="Escribir..."
                        value={columnFilters.find(filter => filter.id === 'apellidoUsuario')?.value as string || ''}
                        onChange={(e) => handleFilterChange('apellidoUsuario', e.target.value)}/>
                </div>
            </div>
            <hr className="border-t border-gray-700 my-10"></hr>
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

export default SimpleTableOperatorInfo;