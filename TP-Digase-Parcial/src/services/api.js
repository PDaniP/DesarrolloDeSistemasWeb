// Archivo centralizado para manejar las llamadas a la API.
//
// Responsabilidades:
// - Configurar la URL base del backend.
// - Definir funciones para cada operación HTTP:
//   - GET (todos los elementos)
//   - GET por ID
//   - POST (crear)
//   - PUT/PATCH (actualizar)
//   - DELETE (eliminar)
//
// Ventajas:
// - Evita repetir código.
// - Facilita cambios en la URL o endpoints.
// - Mantiene separada la lógica de red del resto de la app.