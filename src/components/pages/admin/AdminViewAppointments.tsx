import SimpleTableAppointments from "../../views/Admin/SimpleTableAppointments"

const AdminViewAppointments = () => {
    return(
        <>
            <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
                <div className="h-full w-4/5">
                    
                    <section className="bg-white shadow-customButton w-1/2 h-auto rounded-xl">
                        <div className="bg-primary-blue px-5 py-2 shadow-md rounded-t-lg">
                            <h1 className="text-2xl text-white">Paciente actual</h1>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-row space-x-40 my-1">
                                <h2 className="text-lg">Nombre: John Doe Carvajal</h2>
                                <span className="text-lg">Edad: 20</span>
                            </div>
                            <span className="text-lg">Documento: 10000097</span>
                        </div>
                    </section>
                    

                    <SimpleTableAppointments/>
                    
                    
                    
                </div>
            </main>
        </>
    )
}
export default AdminViewAppointments