import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate the token with the backend
      const validateToken = async () => {
        const response = await fetch('http://localhost:5000/api/auth/validate-token', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          setUser({ id: data.userId }); // Set user state based on response
        } else {
          localStorage.removeItem('token'); // Remove invalid token
        }
      };
      validateToken();
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data); // Log the response from the API
    if (data.success) {
      setUser({ id: 1, email }); // Set user state based on response
      localStorage.setItem('token', data.token); // Store token in local storage
      console.log('User state after login:', { id: 1, email }); // Log the user state
    } else {
      throw new Error(data.error || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove token on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop validation for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
