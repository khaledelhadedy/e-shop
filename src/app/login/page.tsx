"use client"; // Ensures client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy authentication logic (replace with real API call)
    if (email === "user@example.com" && password === "password") {
      // Store user session data in localStorage, cookie, or context
      localStorage.setItem('user', JSON.stringify({ email }));

      // Redirect to home page after login
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-600 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
