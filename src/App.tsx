import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from "./components/pages/main/Dashboard";
import AboutUs from "./components/pages/main/AboutUs";
import Appointments from "./components/pages/main/Appointment";
import Services from "./components/pages/main/Services";
import Schedule_Appointment from "./components/pages/user/schedule/Schedule_Appointment";
import Register from "./components/pages/main/Register";

import OperatorManagement from "./components/pages/operator/OperatorManagement";
import OperatorSchedule from "./components/pages/operator/OperatorSchedule";
import OperatorCancelation from "./components/pages/operator/OperatorManageCancelation";
import OperatorManageReschedule from "./components/pages/operator/OperatorManageReschedule";
import OperatorAuthorizations from "./components/pages/operator/OperatorAuthorizations";
import OperatorEmergencies from "./components/pages/operator/OperatorEmergencies";
import OperatorPatients from "./components/pages/operator/OperatorPatients";
import RegisterPacient from "./components/pages/operator/OperatorRegister";
import OperatorInformation from "./components/pages/operator/OperatorInformation";
import OperatorReschedule from "./components/pages/operator/OperatorReschedule";
import AdminManagement from "./components/pages/admin/AdminManagement";
import RegisterOperator from "./components/pages/admin/AdminRegisterOperator";
import RegisterMedic from "./components/pages/admin/AdminRegisterMedic";
import AdminFinances from "./components/pages/admin/AdminFinances";
import AdminSurvey from "./components/pages/admin/AdminSurvey";
import AdminStats from "./components/pages/admin/AdminStats";
import AdminConsultMedic from "./components/pages/admin/AdminConsultMedic";
import AdminConsultOperator from "./components/pages/admin/AdminConsultOperator";
import AdminViewAppointments from "./components/pages/admin/AdminViewAppointments";
import AdminEditUser from "./components/pages/admin/AdminEditUser";
import HealthCheck from "./components/pages/HealthCheck";
import ReSchedule_Appointment from "./components/pages/user/re-schedule/ReSchedule_Appointment";
import Cancel_Appointment from "./components/pages/user/cancel/Cancel_Appointment";

import {
  DetallesPaciente,
  CrearOrdenMedica,
  HistoriaClinica,
} from "./components/views/especialista";
import { Buscar, Citas } from "./components/pages/especialista";
import EspecialistaLayout from "./components/Layouts/Especialista_layout";
import HomePage from "./components/pages/especialista/HomePage";

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
          <Route path="reagendar" element={<ReSchedule_Appointment />} />
          <Route path="cancelar" element={<Cancel_Appointment />} />
        </Route>
        <Route path="/registrar" element={<Register />} />
        {/* OPERADOR */}
        AQUI IRA LA RUTA PROTEGIDA DE OPERADOR
        {/* <Route path='/operator' element={<Dashboard />}>      */}
        <Route path="/management/" element={<OperatorManagement />}>
          <Route path="agendamiento" element={<OperatorSchedule />} />
          <Route
            path="re-agendamiento/"
            element={<OperatorManageReschedule />}
          />
          <Route
            path="re-agendamiento/cita/:id"
            element={<OperatorReschedule />}
          />
          <Route path="cancelacion" element={<OperatorCancelation />} />
          <Route path="autorizaciones" element={<OperatorAuthorizations />} />
          <Route path="urgencias" element={<OperatorEmergencies />} />
          <Route path="gestionar-pacientes" element={<OperatorPatients />} />
          <Route path='registrar-pacientes' element={<RegisterPacient/>}/>
          <Route path="consultar-pacientes" element={<OperatorInformation />} />
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
        <Route
          path="/especialista/*"
          element={
            <EspecialistaLayout>
              <Routes>
                <Route path="" element={<HomePage />} />{" "}
                {/* Página de inicio */}
                <Route
                  path="detalles-paciente"
                  element={<DetallesPaciente />}
                />
                <Route path="buscar" element={<Buscar />} />
                <Route path="citas" element={<Citas />} />
                <Route
                  path="orden-Medica/:idCita"
                  element={<CrearOrdenMedica />}
                />
                <Route
                  path="historia-clinica/:idCita"
                  element={<HistoriaClinica />}
                />
              </Routes>
            </EspecialistaLayout>
          }
        />
        {/* The form will be shown as a MODAL => encuesta-satisfaccion */}
        {/* <Route
          path="/encuesta-satisfaccion"
          element={<EncuestaSatisfaccion />}
        /> */}
        {/* ADMINISTRADOR */}
        AQUI IRA LA RUTA PROTEGIDA DE ADMIN
        <Route path='/admin/' element={<AdminManagement/>}>
          <Route path='registrar-paciente' element={<RegisterPacient/>}/>
          <Route path='registrar-operador' element={<RegisterOperator/>}/>
          <Route path='registrar-medico' element={<RegisterMedic/>}/>
          <Route path='finanzas' element={<AdminFinances/>}/>
          <Route path='encuesta-satisfaccion' element={<AdminSurvey/>}/>
          <Route path='estadisticas' element={<AdminStats/>}/>
          <Route path='consultar-paciente' element={<OperatorInformation/>}/>
          <Route path='consultar-medicos' element={<AdminConsultMedic/>}/>
          <Route path='consultar-operador' element={<AdminConsultOperator/>}/>
          <Route path='ver-citas' element={<AdminViewAppointments/>}/>
          <Route path='modificar-usuario' element={<AdminEditUser/>}/>
        </Route>
        {/* RUTAS NO EXISTENTES */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* HealthCheck */}
        <Route path="/health" element={<HealthCheck />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
