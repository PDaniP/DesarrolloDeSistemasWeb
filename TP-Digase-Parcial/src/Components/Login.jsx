import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario) {
      navigate("/listado");
    }
  }, [usuario, navigate]);

  /*
    const handleSubmit = (e) => {
        e.preventDefault();

        if (login(usuario, password)) {
            navigate("/listado");
        }
    };
    */
  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(username, password);

    if (!ok) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
