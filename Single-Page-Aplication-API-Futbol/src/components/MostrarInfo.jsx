//Recibe datos por props
//SOLO los muestra
//NO tiene lógica

import React from "react";

function MostrarInfo({ data }) {

    return (
        <div>
            <h2>Información del Equipo</h2>
            {data ? (
                <div className="team-card">
                    <table className="team-table">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{data.id}</td>
                            </tr>
                        <tr>
                            <th>Nombre</th>
                            <td>{data.nombre}</td>
                        </tr>
                        <tr>
                            <th>País</th>
                            <td>{data.pais}</td>
                        </tr>
                        <tr>
                            <th>Liga</th>
                            <td>{data.liga}</td>
                        </tr>
                        <tr>
                            <th>Títulos Nacionales</th>
                            <td>{data.cantidadDeTitulosNacionales}</td>
                        </tr>
                        <tr>
                            <th>Títulos Internacionales</th>
                            <td>{data.cantidadDeTitulosInternacionales}</td>
                        </tr>
                        <tr>
                            <th>Capacidad del Estadio</th>
                            <td>{data.capacidadEstadio}</td>
                        </tr>
                        <tr>
                            <th>Año de Fundación</th>
                            <td>{data.fundacion}</td>
                        </tr>
                        <tr>
                            <th>Colores</th>
                            <td>{data.coloresCamiseta ? `${data.coloresCamiseta.color1}, ${data.coloresCamiseta.color2}` : 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ) : (
                <p>No hay datos para mostrar.</p>
            )}
        </div>
    );

}

export default MostrarInfo;