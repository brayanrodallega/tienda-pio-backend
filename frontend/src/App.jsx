import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/new" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
            <Route path="/products/edit/:id" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
            <Route path="/" element={<ProductList />} /> {/* Ruta principal para ver productos */}
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
