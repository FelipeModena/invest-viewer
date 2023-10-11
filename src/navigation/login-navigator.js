import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { Login } from "../screens/login";
import { Settings } from "../screens/settings";
import { BaseNavigator } from "./base-navigator";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="Base" component={BaseNavigator} />
    </Stack.Navigator>
  );
}
