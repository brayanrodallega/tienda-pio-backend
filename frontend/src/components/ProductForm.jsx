import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const obtenerProducto = async (productId) => {
    try {
      const response = await api.get(`/products/${productId}`);
      const prod = response.data;
      setNombre(prod.nombre);
      setDescripcion(prod.descripcion);
      setPrecio(prod.precio);
      setCategoria(prod.categoria);
      setCantidad(prod.cantidad);
    } catch (error) {
      setMensaje(error.response?.data?.mensaje || 'Error al cargar el producto');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productoData = { nombre, descripcion, precio, categoria, cantidad };
    try {
      if (id) {
        await api.put(`/products/${id}`, productoData);
        setMensaje('Producto actualizado');
      } else {
        await api.post('/products', productoData);
        setMensaje('Producto creado');
      }
      navigate('/products');
    } catch (error) {
      setMensaje(error.response?.data?.mensaje || 'Error al guardar el producto');
    }
  };

  useEffect(() => {
    if (id) {
      obtenerProducto(id);
    }
  }, [id]);

  return (
    <div>
      <h2>{id ? 'Editar Producto' : 'Nuevo Producto'}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Descripción</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <label>Categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <label>Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default ProductForm;
