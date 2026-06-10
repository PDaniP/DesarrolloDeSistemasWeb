import useNavigate from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const usuario = formData.get("usuario");
        const password = formData.get("password");

        if (login(usuario, password)) {
            navigate("/listdo");
        }
    };

    
    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usuario">Usuario:</label>
                    <input type="text" id="usuario" name="usuario" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>

        </div>
    );
}