import React from "react";
import "./componentes/login.css"; // Si están en la misma carpeta, usa "./login.css"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/home"; 
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
          <button type="submit" className="btn">Iniciar Sesión</button>
        </div>

        <div className="olvideContraseña">
          <button 
            type="button" 
            className="linkBtn"
            onClick={() => (window.location.href = "/passwordChange")}
          >
            Olvidé mi contraseña
          </button>
        </div>

        <div className="registro">
          ¿No tienes una cuenta? <a href="/registro">Regístrate</a>
        </div>
      </form>
    </div>
  );
};

export default Login;