import { createContext, useContext, useEffect, useState } from "react";

import {
  loginUser,
  logoutUser,
  registerUser,
  googleLogin,
} from "../api/auth.api.js";

interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  role: string;
}

interface RegisterData {
  name: string;
  username: string;
  email: string;
  role: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (data: LoginData) => Promise<void>;

  register: (data: RegisterData) => Promise<void>;

  googleAuth: (token: string) => Promise<void>;

  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  // restore auth on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    const storedToken = localStorage.getItem("accessToken");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));

      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  // LOGIN
 const login = async (
  data: LoginData
) => {
  const response =
    await loginUser(data);

  const userData =
    response.data.user;

  const accessToken =
    response.data.accessToken;

  setUser(userData);

  setToken(accessToken);

  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  localStorage.setItem(
    "accessToken",
    accessToken
  );
};

  // REGISTER
 const register = async (
  data: RegisterData
) => {
  const response =
    await registerUser(data);

  const userData =
    response.data.user;

  const accessToken =
    response.data.accessToken;

  setUser(userData);

  setToken(accessToken);

  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  localStorage.setItem(
    "accessToken",
    accessToken
  );
};

  // GOOGLE LOGIN
  const googleAuth = async (googleToken: string) => {
    const response = await googleLogin(googleToken);

    const userData = response.data.user;

    const accessToken = response.data.accessToken;

    setUser(userData);

    setToken(accessToken);

    localStorage.setItem("user", JSON.stringify(userData));

    localStorage.setItem("accessToken", accessToken);
  };

  // LOGOUT
  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }

    setUser(null);

    setToken(null);

    localStorage.removeItem("user");

    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        googleAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
