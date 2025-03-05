
# SysPos - API de Gestión de Inventarios

Este proyecto constituye la API del proyecto "SysPos", una aplicación web destinada al sistema de gestión de inventarios. Actualmente, el proyecto se encuentra en sus primeras etapas de desarrollo y sólo incluye la entidad 'Personas' y la API correspondiente. Este proyecto utiliza MySQL 8 como base de datos para el backend.

## Entidad: Personas

La API gestiona la entidad 'Personas', permitiendo operaciones CRUD sobre la misma. A continuación, se describen los endpoints disponibles:

### Crear Persona (`/personas`)

- **Método HTTP:** POST
- **Descripción:** Permite crear una nueva persona en el sistema.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "nombre": "nombre",
    "apellido": "apellido",
    "email": "email@example.com",
    "fechaNacimiento": "1990-01-01"
  }
  ```
- **Respuestas:**
  - **201 Created:** Si la persona se crea correctamente.
  - **400 Bad Request:** Si ocurre un error en la creación (e.g., email duplicado).

### Obtener todas las Personas (`/personas`)

- **Método HTTP:** GET
- **Descripción:** Recupera todas las personas registradas en el sistema.

### Obtener Persona por ID (`/personas/:id`)

- **Método HTTP:** GET
- **Descripción:** Recupera los detalles de una persona específica por su ID.

### Actualizar Persona por ID (`/personas/:id`)

- **Método HTTP:** PUT
- **Descripción:** Actualiza la información de una persona específica.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "nombre": "nuevo nombre",
    "apellido": "nuevo apellido",
    "email": "nuevo_email@example.com",
    "fechaNacimiento": "nueva fecha"
  }
  ```

### Eliminar Persona por ID (`/personas/:id`)

- **Método HTTP:** DELETE
- **Descripción:** Elimina una persona del sistema por su ID.

## Configuración y ejecución

Para ejecutar este proyecto, asegúrate de tener Node.js instalado y de usar `pnpm` como gestor de paquetes. Sigue estos pasos para configurar el entorno:

1. Clona el repositorio.
2. Navega al directorio del proyecto y ejecuta `pnpm install` para instalar las dependencias.
3. Asegúrate de configurar la base de datos MySQL y ajustar los parámetros de conexión en el archivo de configuración.
4. Inicia el servidor con `pnpm start` (asegúrate de tener definido el script de inicio adecuado en tu `package.json`).
5. El servidor estará corriendo en `http://localhost:3000`.

## Notas de desarrollo

Este proyecto es parte de las primeras etapas de desarrollo de "Agape App" y se utiliza principalmente para fines de demostración y pruebas iniciales. En futuras versiones se planea expandir la funcionalidad, incluyendo más entidades y características complejas para mejorar la gestión de inventarios.