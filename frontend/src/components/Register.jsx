import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../index.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeTipo, setMensajeTipo] = useState(''); // Nuevo estado para el tipo de mensaje

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', { email, password });
      setMensaje(response.data.mensaje);
      setMensajeTipo('success');
      navigate('/login');
    } catch (error) {
      setMensaje(error.response?.data?.mensaje || 'Error en el registro');
      setMensajeTipo('error');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && (
        <p className={`message ${mensajeTipo === 'success' ? 'message-success' : 'message-error'}`}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default Register;
