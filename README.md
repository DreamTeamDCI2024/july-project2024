# july-project2024
backend-structure.js

// Backend Structure for Interior Design Platform

1. **API Endpoints**
   - `/api/users`: Gestión de usuarios (clientes y diseñadores).
     - `POST /register`: Registro de nuevos usuarios.
     - `POST /login`: Autenticación de usuarios.
     - `GET /user/profile`: Acceso a perfiles de usuario.
     - `PUT /user/profile`: Actualización de perfiles de usuario.
   - `/api/products`: Gestión de productos.
     - `GET /`: Listar todos los productos.
     - `POST /`: Crear un nuevo producto (solo diseñadores y proveedores).
     - `GET /:productId`: Detalles de un producto específico.
     - `PUT /:productId`: Actualización de producto (solo diseñadores y proveedores).
     - `DELETE /:productId`: Eliminación de producto (solo diseñadores y proveedores).
   - `/api/designs`: Gestión de diseños interiores.
     - `GET /`: Listar diseños.
     - `POST /`: Crear un nuevo diseño (solo diseñadores).
     - `GET /:designId`: Ver detalles de un diseño.
     - `PUT /:designId`: Actualización de un diseño (solo el diseñador creador).
     - `DELETE /:designId`: Eliminación de un diseño (solo el diseñador creador).

2. **Database Schema**
   - **Users**
     - id
     - username
     - password (hashed)
     - email
     - userType (cliente, diseñador, proveedor)
     - profileDetails (información adicional como biografía, estilo de diseño, etc.)
   - **Products**
     - id
     - name
     - description
     - price
     - categoryId (enlaza con Categories para estilos o tipo de producto)
     - creatorId (enlaza con Users)
     - ratings (array de valoraciones)
   - **Designs**
     - id
     - title
     - description
     - images (array de imágenes o enlaces a imágenes)
     - createdBy (enlaza con Users)
     - productsUsed (array de ids de productos)
   - **Categories**
     - id
     - name
     - description (opcional)

3. **Authentication & Authorization**
   - Implementar JWT (JSON Web Tokens) para manejar la autenticación y autorización.
   - Middleware para verificar tokens y roles de usuario en rutas restringidas.

4. **Services Layer**
   - Clases o funciones de servicio para manejar la lógica de negocio, como:
     - UserService (crear, obtener y actualizar usuarios)
     - ProductService (gestionar productos)
     - DesignService (crear y gestionar diseños)

5. **Server Configuration**
   - Utilizar un framework como Express.js para configurar el servidor.
   - Middlewares para logging, manejo de errores, y parsing de body.

