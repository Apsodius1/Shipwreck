import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/game/Profile.screen";

const GameStack = createNativeStackNavigator();

const gameRoutes = (
  <GameStack.Navigator initialRouteName="Game">
    <GameStack.Screen name="Game" component={ProfileScreen} />
  </GameStack.Navigator>
);

export default gameRoutes;
