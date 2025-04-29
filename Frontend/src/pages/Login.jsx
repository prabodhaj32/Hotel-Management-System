import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-6 border rounded-md shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
    </form>
  );
}

export default Login;
