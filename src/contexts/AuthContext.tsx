import React, { createContext, useContext, useState, useEffect } from 'react';
import { teams } from '../data/index'; // Adjust path

interface User {
  name: string;
  email: string;
  favoriteTeam?: typeof teams[number] | null;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  signup: (data: { name: string; email: string; password: string }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  updateFavoriteTeam: (team: typeof teams[number] | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated auth logic (replace with your actual auth implementation)
  useEffect(() => {
    // Check for authenticated user (e.g., from token or localStorage)
    // For this example, we'll simulate loading user data
    setTimeout(() => {
      // Replace with actual auth check
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const signup = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Simulate signup (replace with actual API call)
      const newUser: User = { name, email, favoriteTeam: null };
      localStorage.setItem('user', JSON.stringify(newUser)); // Temporary storage
      setUser(newUser);
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      setError('Signup failed. Please try again.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async ({ email, password }: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Simulate login (replace with actual API call)
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.email === email) {
          setUser(parsedUser);
          setIsAuthenticated(true);
          setError(null);
        } else {
          throw new Error('Invalid credentials');
        }
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Simulate logout (replace with actual API call)
      localStorage.removeItem('user');
      localStorage.removeItem('favoriteTeam'); // Clear favorite team
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    } catch (err) {
      setError('Logout failed. Please try again.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateFavoriteTeam = (team: typeof teams[number] | null) => {
    if (user) {
      const updatedUser = { ...user, favoriteTeam: team };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Update user in storage
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signup, login, logout, updateFavoriteTeam }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}