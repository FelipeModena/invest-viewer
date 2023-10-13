import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/home";
import { Settings } from "../screens/settings";
import ContractDetailScreen from "../screens/contract-detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type HomeStackParamList = {
  HomeScreen: undefined;
  ContractDetailScreen: { id: number; contractNumber: string };
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="SettingsTab" component={Settings} />
    </Tab.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="ContractDetailScreen"
        component={ContractDetailScreen}
        initialParams={{ id: 0, contractNumber: "" }}
      />
    </HomeStack.Navigator>
  );
}
