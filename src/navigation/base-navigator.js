import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/home";
import { Login } from "../screens/login";
import { Settings } from "../screens/settings";

const Tab = createBottomTabNavigator();

export function BaseNavigator({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
