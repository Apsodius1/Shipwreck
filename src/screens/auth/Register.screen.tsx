import React from "react";
import Register from "../../components/Register";
import { useAuth } from "../../hooks/authContext";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };
  const auth = useAuth();
  return <Register onSubmit={auth.register} goToLogin={handleGoToLogin} />;
};

export default RegisterScreen;
