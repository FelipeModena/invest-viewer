import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import ContractDetailScreen from "../screens/contract-detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { createStackNavigator } from '@react-navigation/stack';



export function BaseNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="SettingsTab" component={Settings} />
    </Tab.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContractDetailScreen"
        component={ContractDetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={Home}
      />
    </Stack.Navigator>
  );
}
