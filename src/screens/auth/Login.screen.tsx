import React from "react";
import Login from "../../components/Login";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const handleGoToRegister = () => {
    navigation.navigate("Register");
  };
  const auth = useAuth();
  return <Login onSubmit={auth.login} goToRegister={handleGoToRegister} />;
};

export default LoginScreen;
