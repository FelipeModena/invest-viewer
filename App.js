import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LoginNavigator } from "./src/navigation/login-navigator";
import { genericStyles } from "./src/assets/styles/style";

export default function App() {
  return (
    <NavigationContainer>
      {/* <BaseNavigator /> */}
      <LoginNavigator />
    </NavigationContainer>
  );
}
