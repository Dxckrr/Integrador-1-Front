import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/auth/AuthContext.tsx'
import App from './App.tsx'
import './index.css'
/**
 * Main
 * @author Medicina Musculoesquelética y rehabilitación
 */
createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
