// Página de detalle (ruta "/detalle/:id").
// Representa la vista específica de un elemento.
//
// Responsabilidades:
// - Obtener el ID desde la URL usando useParams.
// - Ejecutar un GET individual al cargar el componente.
// - Mostrar toda la información completa del elemento.
// - Manejar estado de carga (ej: "Cargando...").
//
// Acciones:
// - Botón "Eliminar":
//   - Pedir confirmación al usuario.
//   - Ejecutar DELETE.
//   - Redirigir a /listado usando useNavigate.
// - Botón "Editar":
//   - Permitir modificar los datos (modo edición).
//   - Ejecutar PUT o PATCH.
//
// Este componente cubre READ (detalle), DELETE y UPDATE.