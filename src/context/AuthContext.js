import { Token } from "@/api/token";
import { User } from "@/api/user";
import { createContext, useState, useEffect } from "react";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = {
    accessToken: null,
    user,
    login: null,
    logout: null,
    updateUser: null,
  };

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }
      if (tokenCtrl.hashExpired(token)) {
        logout();
        return;
      } else {
        await login(token);
      }
    })();
  }, []);

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
  };

  const login = async (token) => {
    try {
      // TODO: setear el token en el local storage
      tokenCtrl.setToken(token);
      // TODO: obtener los datos del usuario
      const res = await userCtrl.getMe();
      // TODO: actualizar el estado de user
      setUser(res);
      // TODO: setear el token del state
      setToken(token);
      // TODO: hacer un setloading function
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <AuthContext.Provider
      value={{
        data,
        login,
        user,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
