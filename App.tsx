import { NavigationContainer } from "@react-navigation/native";
import { LoginNavigator } from "./src/navigation/login-navigator";
import React from "react";
export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
