import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from "./components/pages/main/Dashboard";
import AboutUs from "./components/pages/main/AboutUs";
import Appointments from "./components/pages/main/Appointment";
import Services from "./components/pages/main/Services";
import OperatorManagement from "./components/pages/Operator/OperatorManagement";
import OperatorSchedule from "./components/pages/Operator/OperatorSchedule";
import OperatorCancelation from "./components/pages/Operator/OperatorCancelation";
import OperatorReschedule from "./components/pages/Operator/OperatorReschedule";
import OperatorAuthorizations from "./components/pages/Operator/OperatorAuthorizations";
import OperatorEmergencies from "./components/pages/Operator/OperatorEmergencies";
import OperatorPatients from "./components/pages/Operator/OperatorPatients";
import OperatorRegister from "./components/pages/Operator/OperatorRegister";
import OperatorInformation from "./components/pages/Operator/OperatorInformation";
import Payment from "./components/pages/payment/Pasalera1-tsx/Pasarela1-tsx/Pasarela1";
import Payment2 from "./components/pages/payment2/Pasarela2-tsx/Pasarela2";
import Payment3 from "./components/pages/payment3/Pasarela3";

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

        {/* AQUI IRA LA RUTA PROTEGIDA DE ADMIN
        <Route path='/admin' element={<Dashboard />}>     
          <Route path='/sth/' element={<Dashboard />}>
        </Route>
         */}
        {/* Payment  */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment2" element={<Payment2 paymentNumber={""} holderName={""} identification={""} bank={""} totalPayment={""} />} />
        <Route path="/payment3" element={<Payment3 />} />
        {/* RUTAS NO EXISTENTES */}
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* HealthCheck */}
        {/* <Route path="/health" element={<HealthCheck />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
