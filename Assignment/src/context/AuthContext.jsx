// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        setUser(response.data[0]);
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/users', { email, password });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
