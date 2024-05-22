import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login.screen";
import RegisterScreen from "../screens/auth/Register.screen";

const AuthStack = createNativeStackNavigator();

const authRoutes = (
  <AuthStack.Navigator initialRouteName="Login">
    {/* todo : add router names to route file */}
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);
export default authRoutes;
