import React from "react";
import "./login.css"; // tu CSS personalizado

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica de login con React Router
    window.location.href = "/home"; 
  };

  return (
    <div className="formulario">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" name="username" required />
          <label>Usuario</label>
        </div>

        <div className="inputBox">
          <input type="password" name="password" required />
          <label>Contraseña</label>
        </div>

        <div className="acciones">
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