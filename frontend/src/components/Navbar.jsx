import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Tienda Productos PIO</Link>
        <ul className="navbar-menu">
          <li><Link to="/products">Productos</Link></li>
          {isAuthenticated ? (
            <>
              <li><button onClick={logout} className="navbar-button">Cerrar Sesión</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;