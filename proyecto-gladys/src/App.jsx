import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta inicial: muestra el login al abrir la app */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}