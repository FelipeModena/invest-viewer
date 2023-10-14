//login page with a form and a button to submit the form

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import { genericStyles } from "../../assets/styles/style";
import imageStyle from "../../assets/styles/image-style";
import authenticate from "../../store/auth";
import axiosOpenExInstance from "../../services/axios";

export function Login({navigation} :any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getRates() {
    const res = await axiosOpenExInstance.get("latest.json/");
    console.log(res.data);
  }
  // getRates();
  const handleLogin = async () => {
    const user = await authenticate(email, password);

    if (user) {
      navigation.navigate("Base");
    }
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={genericStyles.body}
    >
      <View style={genericStyles.container}>
        <Image
          style={imageStyle.large}
          source={require("../../assets/imgs/general/vault.png")}
          resizeMode="contain"
        />
        <Text style={genericStyles.textLabel}>Email</Text>
        <TextInput
          style={genericStyles.textInput}
          placeholderTextColor={genericStyles.textInput as any}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={genericStyles.textLabel}>Password</Text>
        <TextInput
          style={genericStyles.textInput}
          placeholderTextColor={genericStyles.textInput.color}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Ionicons.Button
          name="ios-log-in"
          onPress={handleLogin}
          style={genericStyles.button}
        >
          <Text style={genericStyles.textLabel}>Login</Text>
        </Ionicons.Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
