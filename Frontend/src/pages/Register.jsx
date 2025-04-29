import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await register(username, email, password);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-6 border rounded-md shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <input type="text" placeholder="Username" className="w-full p-2 border rounded" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="w-full p-2 bg-green-500 text-white rounded">Register</button>
    </form>
  );
}

export default Register;
