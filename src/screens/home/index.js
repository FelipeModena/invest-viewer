//give me a generic home page

import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import genericStyles from "../../assets/styles/style";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
      <TextInput style={genericStyles.textInput}></TextInput>
      <Text>Senha</Text>
      <TextInput style={genericStyles.textInput} secureTextEntry={true}>asdsad</TextInput>
      <Button
        color={genericStyles.button.color}
        title="Go to About"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
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
