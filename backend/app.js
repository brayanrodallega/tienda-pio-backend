const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// En app.js / server.js
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Rutas de autenticación
app.use('/auth', authRoutes);

// Ejemplo de ruta protegida
app.get('/ruta-protegida', authMiddleware, (req, res) => {
  res.json({ mensaje: 'Acceso concedido a la ruta protegida' });
});

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error de conexión:', err));

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor activo' });
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
