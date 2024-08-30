import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from "./components/pages/Dashboard";
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
