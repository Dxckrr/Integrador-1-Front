import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import {
  DetallesPaciente,
  CrearOrdenMedica,
  HistoriaClinica,
} from "./components/views/especialista_views";
import { Buscar, Citas } from "./components/pages/especialista_pages";
import EspecialistaLayout from "./components/Layouts/Especialista_layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN ROUTE '/' */}
        <Route index element={<Dashboard />} />
        {/* USUARIO */}
        <Route path="/" element={<Dashboard />} />
        {/* 
        <Route path="/" element={<AboutUs />} />
        <Route path="/" element={<Services />} /> 
        <Route path="/" element={<Appointments />} />         
        */}

        {/* OPERADOR */}

        {/* AQUI IRA LA RUTA PROTEGIDA DE OPERADOR
        <Route path='/operator' element={<Dashboard />}>     
          <Route path='/sth/' element={<Dashboard />}>
        </Route>

         */}

        {/* MEDICO */}

        {/* AQUI IRA LA RUTA PROTEGIDA DE MEDICO
        <Route path='/medic' element={<Dashboard />}>     
          <Route path='/sth/' element={<Dashboard />}>
        </Route>
         */}

        <Route
          path="/especialista/*"
          element={
            <EspecialistaLayout>
              <Routes>
                <Route
                  path="detallesDelPaciente"
                  element={<DetallesPaciente />}
                />
                <Route path="buscar" element={<Buscar />} />
                <Route path="citas" element={<Citas />} />
                <Route path="ordenMedica" element={<CrearOrdenMedica />} />
                <Route path="HistoriaClinica" element={<HistoriaClinica />} />
              </Routes>
            </EspecialistaLayout>
          }
        />
        {/* ADMINISTRADOR */}

        {/* AQUI IRA LA RUTA PROTEGIDA DE ADMIN
        <Route path='/admin' element={<Dashboard />}>     
          <Route path='/sth/' element={<Dashboard />}>
        </Route>
         */}

        {/* RUTAS NO EXISTENTES */}
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* HealthCheck */}
        {/* <Route path="/health" element={<HealthCheck />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
