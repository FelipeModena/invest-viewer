//create base page for settings

// Path: src/screens/settings/index.js

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { genericStyles } from "../../assets/styles/style";
import { FIREBASE_AUTH } from "../../services/firebase/firebase.config";
import { NavigationProp } from "@react-navigation/native";

interface SettingsProps {
  navigation: NavigationProp <any, any>;
}

export function Settings({ navigation } : SettingsProps) {
  return (
    <View style={genericStyles.container}>
      <Text>Fefe</Text>

      <Button title="sad" onPress={() => FIREBASE_AUTH.signOut()}></Button>
    </View>
  );
}
