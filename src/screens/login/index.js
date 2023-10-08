//login page with a form and a button to submit the form

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
// import { login } from "../../services/auth";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // const user = await login(email, password);
    navigation.replace("homescreen", { email: email });

    navigation.navigate("RoutesBase");
    if (user) {
      navigation.navigate("Home");
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
