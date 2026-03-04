import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4 className="text-center mb-4">🍣 Sushi Admin</h4>

        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">📊 Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/ventas">💰 Ventas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/nomina">👥 Nómina</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/finanzas">📈 Finanzas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/inventario">📦 Inventario</Link>
          </li>
        </ul>
      </div>

      {/* Contenido */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;