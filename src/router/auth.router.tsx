import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login.screen";
import RegisterScreen from "../screens/auth/Register.screen";

const AuthStack = createNativeStackNavigator();

const authRoutes = (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);
export default authRoutes;
