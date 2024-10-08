"use client";

import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginModal({ onClose }) {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ username: data.username });
        onClose();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('An error occurred:', err);
      setError('An unexpected error occurred');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ username: data.username });
        onClose();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('An error occurred:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-6 w-full max-w-sm">
        <h2 className="text-2xl mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 text-black">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-md text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-200 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
          </button>
        </div>
      </div>
    </div>
  );
}
