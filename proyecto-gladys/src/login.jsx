import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./componentes/login.css";

const Login = () => {
  const navigate    = useNavigate();
  const usuarioRef  = useRef(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({ user: false, pass: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const nombreUsuario = usuarioRef.current?.value || "Usuario";
      localStorage.setItem("token",   "autenticado");
      localStorage.setItem("usuario", nombreUsuario);
      navigate("/ventas");
    }, 950);
  };

  return (
    <div className="lg-bg">
      {/* Ruido de fondo */}
      <div className="lg-noise" />

      {/* Acento lateral izquierdo */}
      <div className="lg-side-bar" />

      <div className="lg-card">

        {/* ── Marca ── */}
        <div className="lg-brand">
          <div className="lg-brand-icon">
            <svg viewBox="0 0 44 44" fill="none">
              <rect x="1" y="1" width="42" height="42" rx="10"
                    stroke="url(#rb)" strokeWidth="1.5"/>
              <path d="M12 22h8l3-8 4 16 3-8h4"
                    stroke="url(#rb)" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="rb" x1="0" y1="0" x2="44" y2="44"
                                gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#E8303A"/>
                  <stop offset="100%" stopColor="#C9870A"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="lg-brand-text">
            <span className="lg-brand-name">SANJI</span>
            <span className="lg-brand-kanji">売上管理</span>
          </div>
        </div>

        {/* ── Divisor ── */}
        <div className="lg-divider" />

        {/* ── Encabezado ── */}
        <div className="lg-header">
          <h1 className="lg-title">Iniciar Sesión</h1>
          <p className="lg-sub">Accede al panel de control</p>
        </div>

        {/* ── Formulario ── */}
        <form className="lg-form" onSubmit={handleSubmit}>

          {/* Usuario */}
          <div className={`lg-field ${focused.user ? "active" : ""}`}>
            <label className="lg-label" htmlFor="lg-user">Usuario</label>
            <div className="lg-input-wrap">
              <svg className="lg-ico" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3.5 17c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                id="lg-user"
                type="text"
                ref={usuarioRef}
                className="lg-input"
                placeholder="Nombre de usuario"
                required
                autoComplete="username"
                onFocus={() => setFocused(f => ({ ...f, user: true }))}
                onBlur={() => setFocused(f => ({ ...f, user: false }))}
              />
            </div>
            <div className="lg-underline" />
          </div>

          {/* Contraseña */}
          <div className={`lg-field ${focused.pass ? "active" : ""}`}>
            <label className="lg-label" htmlFor="lg-pass">Contraseña</label>
            <div className="lg-input-wrap">
              <svg className="lg-ico" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="9" width="12" height="8" rx="2"
                      stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 9V6.5a3 3 0 016 0V9"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                id="lg-pass"
                type="password"
                className="lg-input"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                onFocus={() => setFocused(f => ({ ...f, pass: true }))}
                onBlur={() => setFocused(f => ({ ...f, pass: false }))}
              />
            </div>
            <div className="lg-underline" />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className={`lg-btn ${loading ? "lg-btn--loading" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <span className="lg-spinner" />
            ) : (
              <>
                <span>Entrar al sistema</span>
                <svg className="lg-arrow" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5"
                        stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>

        </form>

        {/* ── Footer ── */}
        <div className="lg-footer">
          <button
            type="button"
            className="lg-link"
            onClick={() => navigate("/olvide-contrasena")}
          >
            ¿Olvidaste tu contraseña?
          </button>

          <span className="lg-dot">·</span>

          <button
            type="button"
            className="lg-link lg-link--accent"
            onClick={() => navigate("/register")}
          >
            Crear cuenta
          </button>
        </div>

      </div>

      {/* Tag de versión */}
      <span className="lg-version">v2.0 · 売上管理</span>
    </div>
  );
};

export default Login;
