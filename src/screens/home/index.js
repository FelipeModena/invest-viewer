//give me a generic home page

import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { genericStyles } from "../../assets/styles/style";

export function Home({ navigation }) {
  return (
    <ScrollView style={genericStyles.body}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
