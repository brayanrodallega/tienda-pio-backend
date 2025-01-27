import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import api from '../services/api';
import '../index.css';

function ProductList() {
  const { isAuthenticated } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      {isAuthenticated && (
        <Link to="/products/new">
          <button className="btn-add-product">Agregar Producto</button>
        </Link>
      )}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            {isAuthenticated && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td>{product.categoria}</td>
              <td>{product.cantidad}</td>
              {isAuthenticated && (
                <td>
                  <Link to={`/products/edit/${product._id}`}>
                    <button>Editar</button>
                  </Link>
                  <button onClick={() => handleDelete(product._id)}>Eliminar</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  async function handleDelete(id) {
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto', error);
    }
  }
}

export default ProductList;
