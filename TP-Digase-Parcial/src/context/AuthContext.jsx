import { createContext, useState } from "react";

export const AuthContext = createContext();

const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || null);

function login(usuario, password) {
    if (usuario === "admin" && password === '1234'){
        setUsuario(usuario);
        localStorage.setItem("usuario", usuario);
        return true;
    }
    return false;
}

function logout() {
    setUsuario(null);
    localStorage.removeItem("usuario");
}

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

