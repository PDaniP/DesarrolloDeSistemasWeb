import useContext from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RutaPrivada() {
    const { usuario } = useContext(AuthContext);
    if (!usuario) {
        return <Navigate to="/login" />;
    } else {
        return <Outlet />;
    }
}

