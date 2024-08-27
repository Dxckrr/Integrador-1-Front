import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Importando librerias de react-router-dom para el manejo de wards ('/')
import Dashboard from './components/views/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>

      {/* MAIN ROUTE '/' */}
      <Route index element={<Dashboard />} />
      {/* USUARIO */}
      <Route path='/' element={<Dashboard />} />
      
      {/* OPERADOR */}
      {/* <Route path='/test' element={<Dashboard />} /> */}


    </Routes>
  </BrowserRouter >
  );
}
export default App;
