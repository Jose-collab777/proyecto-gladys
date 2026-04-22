import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const navItems = [
  { to: "/ventas",   icon: "🍣", label: "Ventas"   },
  { to: "/nomina",   icon: "👥", label: "Nómina"   },
  { to: "/finanzas", icon: "📊", label: "Finanzas" },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  // Nombre de usuario guardado al hacer login
  const usuarioCompleto = localStorage.getItem("usuario") || "Usuario";
  // Iniciales para el avatar (hasta 2 caracteres)
  const iniciales = usuarioCompleto
    .split(" ")
    .slice(0, 2)
    .map(p => p.charAt(0).toUpperCase())
    .join("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <div className="admin-shell">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        {/* LOGO */}
        <div className="sidebar-logo">
          <div className="logo-icon">🍣</div>
          <div className="logo-text">
            <span className="logo-name">SANJI</span>
            <span className="logo-jp">桜ロール · Admin</span>
          </div>
        </div>

        {/* NAV */}
        <nav className="sidebar-nav">
          <span className="nav-section-label">Principal</span>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-arrow">›</span>
            </NavLink>
          ))}
        </nav>

        {/* DIVIDER */}
        <div className="sidebar-divider" />

        {/* FOOTER */}
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">{iniciales}</div>
            <div className="user-details">
              <span className="user-name">{usuarioCompleto}</span>
              <span className="user-role">Gerente</span>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
            ⏻
          </button>
        </div>
      </aside>

      {/* ── CONTENT ── */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
