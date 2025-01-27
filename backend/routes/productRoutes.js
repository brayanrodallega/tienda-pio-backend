const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authMiddleware = require('../middlewares/authMiddleware');

// Crear un nuevo producto
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, cantidad } = req.body;
    const nuevoProducto = new Product({
      nombre,
      descripcion,
      precio,
      categoria,
      cantidad
    });
    await nuevoProducto.save();
    res.status(201).json({ mensaje: 'Producto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
});

// Listar todos los productos (sin autenticación)
router.get('/', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
});

// Obtener un producto por su ID
router.get('/:id', async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
});

// Actualizar un producto por su ID
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, cantidad } = req.body;
    const productoActualizado = await Product.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, precio, categoria, cantidad },
      { new: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto actualizado correctamente', productoActualizado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el producto' });
  }
});

// Eliminar un producto por su ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const productoEliminado = await Product.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
});

module.exports = router;
