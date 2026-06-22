import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RutaPrivada() {
    const { usuario, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Cargando</p>;
    }


    if (!usuario) {
        return <Navigate to="/login" replace/>;
    }

    return <Outlet />;
}

