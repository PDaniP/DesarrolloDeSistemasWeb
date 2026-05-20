// Página de inicio (ruta "/").
// Representa el panel de alta de datos.
//
// Responsabilidades:
// - Mostrar el componente Formulario.
// - Servir como contenedor de la lógica de creación.
//
// No maneja lógica directamente, solo organiza la vista.

import Formulario from '../components/Formulario';

function Home() {


    return (
        <div>
            <h1>Alta de Datos</h1>
            <Formulario />
        </div>
    );

}
