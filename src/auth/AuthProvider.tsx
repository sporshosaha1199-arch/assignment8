import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface User {
  id: string;
  name: string;
  email: string;
  photoURL: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, photoURL: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  logout: () => void;
  updateProfile: (name: string, photoURL: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load simulated user on mount
    const storedUser = localStorage.getItem('suncart_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const usersRaw = localStorage.getItem('suncart_users_db');
          const users: any[] = usersRaw ? JSON.parse(usersRaw) : [];
          
          const found = users.find(u => u.email === email && u.password === password);
          if (found) {
            const userData = { id: found.id, name: found.name, email: found.email, photoURL: found.photoURL };
            setUser(userData);
            localStorage.setItem('suncart_user', JSON.stringify(userData));
            resolve();
          } else {
            reject(new Error('Invalid email or password'));
          }
          setLoading(false);
        }, 800);
      });
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const register = async (name: string, email: string, photoURL: string, password: string) => {
    setLoading(true);
    try {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const usersRaw = localStorage.getItem('suncart_users_db');
          const users: any[] = usersRaw ? JSON.parse(usersRaw) : [];
          
          if (users.find(u => u.email === email)) {
            reject(new Error('Email already in use'));
            setLoading(false);
            return;
          }
          
          const newUser = { id: Math.random().toString(36).substr(2, 9), name, email, photoURL, password };
          users.push(newUser);
          localStorage.setItem('suncart_users_db', JSON.stringify(users));
          resolve();
          setLoading(false);
        }, 800);
      });
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData = { 
          id: Math.random().toString(36).substr(2, 9), 
          name: 'Google User', 
          email: 'google.user@example.com', 
          photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80' 
        };
        setUser(userData);
        localStorage.setItem('suncart_user', JSON.stringify(userData));
        resolve();
        setLoading(false);
      }, 600);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('suncart_user');
    toast.success('Logged out successfully');
  };

  const updateProfile = async (name: string, photoURL: string) => {
    if (!user) return;
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const updatedUser = { ...user, name, photoURL };
        setUser(updatedUser);
        localStorage.setItem('suncart_user', JSON.stringify(updatedUser));
        
        // Update in mock DB
        const usersRaw = localStorage.getItem('suncart_users_db');
        if (usersRaw) {
          const users: any[] = JSON.parse(usersRaw);
          const index = users.findIndex(u => u.id === user.id);
          if (index !== -1) {
            users[index].name = name;
            users[index].photoURL = photoURL;
            localStorage.setItem('suncart_users_db', JSON.stringify(users));
          }
        }
        resolve();
        setLoading(false);
      }, 800);
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
