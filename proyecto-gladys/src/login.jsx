import React from "react";
import { useNavigate } from "react-router-dom";
import "./componentes/login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // simula login
    localStorage.setItem("token", "autenticado");

    navigate("/ventas");
  };

  return (
    <div className="formulario">
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit}>
        <div className="username">
          <input type="text" required />
          <span></span>
          <label>Usuario</label>
        </div>

        <div className="username">
          <input type="password" required />
          <span></span>
          <label>Contraseña</label>
        </div>

        <div className="iniciarSesion">
          <button type="submit" className="btn">
            Iniciar Sesión
          </button>
        </div>

        <div className="olvideContraseña">
          <button
            type="button"
            className="linkBtn"
onClick={() => navigate("/olvide-contrasena")}          >
            Olvidé mi contraseña
          </button>
        </div>

        <div className="registro">
          ¿No tienes una cuenta?{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => navigate("/register")} // 👈 CORREGIDO
          >
            Regístrate
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;