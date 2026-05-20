// Barra de navegación global.
// Permite moverse entre las distintas páginas de la aplicación.
//
// Responsabilidades:
// - Contener enlaces de navegación usando <Link> (NO <a>).
// - Redirigir a:
//   - Inicio (/)
//   - Listado (/listado)
//
// Debe ser visible en toda la aplicación (se renderiza en App.jsx).

import { Link } from 'react-router-dom';

function Navbar() {



    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/listado">Listado</Link></li>
            </ul>
        </nav>
    );
}