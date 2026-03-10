import React from "react";
import { useNavigate } from "react-router-dom";
import "./componentes/login.css";

const Login = () => {
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("token", "autenticado"); // ← agrega esta línea
  navigate("/");
};

  return (
    <div className="formulario">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <input type="text" name="username" required />
          <span></span>
          <label>Usuario</label>
        </div>

        <div className="username">
          <input type="password" name="password" required />
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
            onClick={() => navigate("/passwordChange")}
          >
            Olvidé mi contraseña
          </button>
        </div>

        <div className="registro">
          ¿No tienes una cuenta?{" "}
          <span 
            style={{cursor:"pointer", color:"blue"}}
            onClick={() => navigate("/registro")}
          >
            Regístrate
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;