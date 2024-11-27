import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface UserInfo {
  name: string;
  email: string;
  picture: string;
  role: string;
}

interface UserContextType {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}
// Crear el contexto
const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  error: null,
  fetchUser: async () => {},
});

// Proveedor del contexto
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get<UserInfo>(
        "https://7242-52-45-88-219.ngrok-free.app/user-info",
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching user info", err);
      setError("No se pudo cargar la información del usuario");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  // Fetch user on initial load
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto de usuario
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};
