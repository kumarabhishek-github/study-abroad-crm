    import { createContext, useContext, useState, ReactNode } from 'react';

const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode; // Specify the type for children prop
}
export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;