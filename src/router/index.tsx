import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import authRoutes from "./auth.router";
import { useAuth } from "../hooks/authContext";
import { ActivityIndicator, SafeAreaView } from "react-native";
import gameRoutes from "./game.router";

const Router: React.FC = () => {
  const auth = useAuth();
  console.log("auth up", auth.token, " .");

  if (auth.isLoading) {
    return (
      <SafeAreaView
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  console.log("auth down", auth.token, " .");

  return (
    <NavigationContainer>
      {auth.token ? gameRoutes : authRoutes}
      {/* {authRoutes} */}
    </NavigationContainer>
  );
};

export default Router;
