import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  role: string; // ADM ou MOD
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = () => {
      try {
        const userData = sessionStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Erro ao ler dados do usuário:', error);
        sessionStorage.removeItem('user');
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'user') {
        if (e.newValue) {
          try {
            setUser(JSON.parse(e.newValue));
          } catch (error) {
            console.error('Erro ao parsear dados do usuário:', error);
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
    };

    const handleCustomStorageChange = () => {
      checkUser();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userChange', handleCustomStorageChange);
    };
  }, []);

  const login = (userData: User) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    window.dispatchEvent(new Event('userChange'));
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('userChange'));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};