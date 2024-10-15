import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { verifyTokenRequest, signin } from "../../services/auth/auth.service";
import { UserLogin, User } from "../../types/auth/UserLogin";

// Define the interface for the AuthContext
interface AuthContextProps {
  signinContext: (user: UserLogin) => Promise<User | undefined>;
  logoutContext: () => Promise<void>;
  userLogin: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create the context with proper typing
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No AuthContext");
  }
  return context;
};

// Define the AuthProvider props type
interface AuthProviderProps {
  children: React.ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userLogin, setUserLogin] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signinContext = async (user: UserLogin): Promise<User | undefined> => {
    try {
      const res: User = await signin(user);
      setIsAuthenticated(true);
      setUserLogin(res);
      console.log(res)
      return res;
    } catch (err) {
      console.error(err);
    }
  };
  const logoutContext = async () => {
    //Quitar la cookie del user
    Cookies.remove("token");
    setUserLogin(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUserLogin(res);
      } catch (error ) {
        console.error(error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signinContext,
        logoutContext,
        userLogin,
        isAuthenticated,
        loading,
        setLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
