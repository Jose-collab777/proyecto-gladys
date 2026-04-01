import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./componentes/AdminLayout";

import Ventas from "./componentes/Ventas";
import Nomina from "./Nomina";
import Finanzas from "./Finanzas";
import Inventario from "./Inventario";
import Login from "./login";

// Componente que protege rutas privadas
function RutaPrivada({ children }) {
  const estaAutenticado = localStorage.getItem("token"); // o tu lógica de auth
  return estaAutenticado ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      {/* Ruta pública: login */}
      <Route path="/login" element={<Login />} />

      {/* Rutas privadas protegidas */}
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
        <Route path="inventario" element={<Inventario />} />
      </Route>

      {/* Redirige cualquier ruta desconocida al login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;