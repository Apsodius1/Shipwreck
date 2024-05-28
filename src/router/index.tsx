import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import authRoutes from "./auth.router";
import { useAuth } from "../hooks/authContext";

const Router = () => {
  const auth = useAuth();
  return <NavigationContainer>{authRoutes}</NavigationContainer>;
};

export default Router;
