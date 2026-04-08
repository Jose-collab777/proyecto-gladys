import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./componentes/AdminLayout";
import Register from "./Register";
import Ventas from "./componentes/Ventas";
import Nomina from "./Nomina";
import Finanzas from "./Finanzas";
import Login from "./login"; // 👈 IMPORTANTE mayúscula

// Protege rutas
function RutaPrivada({ children }) {
  const estaAutenticado = localStorage.getItem("token");
  return estaAutenticado ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Privadas */}
      <Route
        path="/"
        element={
          <RutaPrivada>
            <AdminLayout />
          </RutaPrivada>
        }
      >
        <Route path="ventas" element={<Ventas />} />
        <Route path="nomina" element={<Nomina />} />
        <Route path="finanzas" element={<Finanzas />} />
      </Route>

      {/* Redirección */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;