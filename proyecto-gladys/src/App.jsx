import { Routes, Route } from "react-router-dom";
import AdminLayout from "./componentes/AdminLayout";
import Dashboard from "./Dashboard";
import Ventas from "./Ventas";
import Nomina from "./Nomina";
import Finanzas from "./Finanzas";
import Inventario from "./Inventario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="nomina" element={<Nomina />} />
        <Route path="finanzas" element={<Finanzas />} />
        <Route path="inventario" element={<Inventario />} />
      </Route>
    </Routes>
  );
}

export default App;