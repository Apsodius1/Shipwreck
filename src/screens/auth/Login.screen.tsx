import React from "react";
import Login from "../../components/Login";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const handleGoToRegister = () => {
    navigation.navigate("Register");
  };
  return <Login goToRegister={handleGoToRegister} />;
};

export default LoginScreen;
