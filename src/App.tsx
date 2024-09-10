import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from "./components/pages/main/Dashboard";
import AboutUs from "./components/pages/main/AboutUs";
import Appointments from "./components/pages/main/Appointment";
import Services from "./components/pages/main/Services";
import Schedule_Appointment from "./components/pages/user/schedule/Schedule_Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN ROUTE '/' */}
        <Route index element={<Dashboard />} />
        {/* USUARIO */}
        <Route path="/" element={<Dashboard />} />

        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />

        <Route path="/citas" element={<Appointments />}>
          <Route path="agendar" element={<Schedule_Appointment />} />
        </Route>

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
