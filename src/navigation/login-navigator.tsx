import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/login";
import { RootNavigator } from "./base-navigator";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../services/firebase/firebase.config";

const Stack = createNativeStackNavigator();

export function LoginNavigator() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      {user ? (
        <Stack.Screen name="Base" component={RootNavigator} />
      ) : (
        <Stack.Screen name="LoginScreen" component={Login} />
      )}
    </Stack.Navigator>
  );
}
