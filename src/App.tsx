import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from "./components/pages/main/Dashboard";
import AboutUs from "./components/pages/main/AboutUs";
import Appointments from "./components/pages/main/Appointment";
import Services from "./components/pages/main/Services";
import OperatorManagement from "./components/pages/operator/OperatorManagement";
import OperatorSchedule from "./components/pages/operator/OperatorSchedule";
import OperatorCancelation from "./components/pages/operator/OperatorCancelation";
import OperatorReschedule from "./components/pages/operator/OperatorReschedule";
import OperatorAuthorizations from "./components/pages/operator/OperatorAuthorizations";
import OperatorEmergencies from "./components/pages/operator/OperatorEmergencies";
import OperatorPatients from "./components/pages/operator/OperatorPatients";
import OperatorRegister from "./components/pages/operator/OperatorRegister";
import OperatorInformation from "./components/pages/operator/OperatorInformation";
import AdminManagement from "./components/pages/admin/AdminManagement";
import AdminRegisterPacient from "./components/pages/admin/AdminRegisterPacient";
import AdminRegisterOperator from "./components/pages/admin/AdminRegisterOperator";
import AdminRegisterMedic from "./components/pages/admin/AdminRegisterMedic";
import AdminFinances from "./components/pages/admin/AdminFinances";
import AdminSurvey from "./components/pages/admin/AdminSurvey";
import AdminStats from "./components/pages/admin/AdminStats";

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
        <Route path="/citas" element={<Appointments />} />

        {/* OPERADOR */}
      
        AQUI IRA LA RUTA PROTEGIDA DE OPERADOR
        {/* <Route path='/operator' element={<Dashboard />}>      */}
        <Route path='/management/' element={<OperatorManagement/>}>
          <Route path='agendamiento' element={<OperatorSchedule/>}/>
          <Route path='re-agendamiento' element={<OperatorReschedule/>}/>
          <Route path='cancelacion' element={<OperatorCancelation/>}/>
          <Route path='autorizaciones' element={<OperatorAuthorizations/>}/>
          <Route path='urgencias' element={<OperatorEmergencies/>}/>
          <Route path='gestionar-pacientes' element={<OperatorPatients/>}/>
          <Route path='registrar-pacientes' element={<OperatorRegister/>}/>
          <Route path='consultar-pacientes' element={<OperatorInformation/>}/>
          {/* <Route path='confirm' element={<ConfirmAppointment />} />
          <Route path='cancel' element={<CancelAppointmnet />} />
          <Route path='reschedule' element={<RescheduleAppointment />} /> */}
          {/* <Route path='addUser' element={<RegisterUsers />} /> */}
      </Route>
        

        {/* MEDICO */}

        {/* AQUI IRA LA RUTA PROTEGIDA DE MEDICO
        <Route path='/medic' element={<Dashboard />}>     
          <Route path='/sth/' element={<Dashboard />}>
        </Route>
         */}

        {/* ADMINISTRADOR */}

        AQUI IRA LA RUTA PROTEGIDA DE ADMIN
        <Route path='/admin/' element={<AdminManagement/>}>
          <Route path='registrar-paciente' element={<AdminRegisterPacient/>}/>
          <Route path='finanzas' element={<AdminFinances/>}/>
          <Route path='encuesta-satisfaccion' element={<AdminSurvey/>}/>
          <Route path='estadisticas' element={<AdminStats/>}/>
        </Route>

        {/* RUTAS NO EXISTENTES */}
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* HealthCheck */}
        {/* <Route path="/health" element={<HealthCheck />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
