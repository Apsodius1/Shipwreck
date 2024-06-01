import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/game/Profile.screen";

const GameStack = createNativeStackNavigator();

const gameRoutes = (
  <GameStack.Navigator initialRouteName="Profile">
    <GameStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </GameStack.Navigator>
);

export default gameRoutes;
