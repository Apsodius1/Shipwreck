import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getProfile, login, register } from "../api";

interface IAuthContext {
  token: string;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  details: object | null;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  login: async () => {},
  register: async () => {},
  details: { d: "" },
  isLoading: false,
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<any>({ haha: "haah" });

  // useEffect(() => {
  //   setIsLoading(true);
  //   AsyncStorage.getItem("token")
  //     .then((value) => {
  //       if (value !== null) {
  //         setToken(value);
  //       }
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log("login called");
      const result = await login(email, password);
      setToken(result);
      await AsyncStorage.setItem("token", result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = async (email: string, password: string) => {
    try {
      console.log("register called");
      const result = await register(email, password);
      setToken(result);
      await AsyncStorage.setItem("token", result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetDetails = async () => {
    setIsLoading(true);
    try {
      const result = await getProfile(token);
      console.log("details called", result, " .");
      setUserData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetDetails();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        login: handleLogin,
        register: handleRegister,
        details: userData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
