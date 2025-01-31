# Tienda PIO

Este proyecto es una tienda en línea construida con React en el frontend y Node.js con Express en el backend. Utiliza MongoDB como base de datos.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB
- npm o yarn

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tienda-pio.git
cd tienda-pio
```

Configuración del Backend
1. Navega al directorio del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

Crea un archivo .env en el directorio backend y agrega las siguientes variables de entorno:

```bash
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto_jwt
PORT=3000
```

Inicia el servidor backend:

```bash
npm start
```

El servidor backend debería estar corriendo en
http://localhost:3000.

Configuración del Frontend:

1. Navega al directorio del frontend:

```bash
cd ../frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo del frontend:
```bash
npm run dev
```

El servidor frontend debería estar corriendo en http://localhost:5173.


## Uso
### Registro e Inicio de Sesión

1. Abre el navegador y navega a http://localhost:5173.
2. Regístrate con un nuevo usuario.
3. Inicia sesión con el usuario registrado.

### Gestión de Productos
1. Una vez autenticado, podrás ver la lista de productos.
2. Los usuarios autenticados pueden agregar, editar y eliminar productos.

## Estructura del Proyecto
```bash
tienda-pio/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── .env
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductList.jsx
│   │   │   └── Register.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── Footer.css
│   │   │   ├── Navbar.css
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
└── README.md
```

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.
