import { createContext, useEffect, useState } from "react";
import { usuarios } from "../services/users.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    //const [usuario, setUsuario] = useState(() => localStorage.getItem("usuario") || null);
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem("usuario");
        if (data) {
            setUsuario(JSON.parse(data));
        }

        setLoading(false);

    },[]);

    /*
    function login(usuario, password) {
        if (usuario === "admin" && password === "1234") {
            setUsuario(usuario);
            localStorage.setItem("usuario", usuario);
            return true;
        }
        return false;
    }
    */
    function login(username, password) {
        const user = usuarios.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
        const userSafe = {
            username: user.username,
            rol: user.rol
        };

        setUsuario(userSafe);
        localStorage.setItem("usuario", JSON.stringify(userSafe));
        return true;
        }

        return false;
    }


    function logout() {
        setUsuario(null);
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

