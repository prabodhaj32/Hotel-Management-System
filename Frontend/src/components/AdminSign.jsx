import React, { useState } from 'react';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate simple credential check (example only)
    if (email === 'admin@example.com' && password === 'admin123') {
      setSuccessMessage('Sign-in successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/admin/dashboard'; // Simulated redirect
      }, 2000);
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Sign In</h2>

        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
