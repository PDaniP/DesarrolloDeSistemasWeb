import { useState } from "react";
import BotonMostrar from "./BotonMostrar";

function IngresarInformacion({ onSubmit }){
	const [nombre, setNombre] = useState("");
	const [anio, setAnio] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if(onSubmit) onSubmit({ nombre, anio });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Nombre:</label>
				<input
					type="text"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					placeholder="Ingrese el nombre"
				/>
			</div>

			<div>
				<label>Año de nacimiento:</label>
				<input
					type="number"
					value={anio}
					onChange={(e) => setAnio(e.target.value)}
					placeholder="YYYY"
				/>
			</div>

			<BotonMostrar nombre={nombre} fecha={anio} />
		</form>
	);
}

export default IngresarInformacion;