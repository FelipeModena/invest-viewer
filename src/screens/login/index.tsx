//login page with a form and a button to submit the form

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { genericStyles } from "../../assets/styles/style";
import imageStyle from "../../assets/styles/image-style";
import authenticate from "../../store/auth";

export function Login({ navigation }: any) {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await authenticate({ password, username: userName });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
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
        <Text style={genericStyles.textLabel}>Usuário</Text>
        <TextInput
          shouldRasterizeIOS
          style={genericStyles.textInput}
          placeholderTextColor={genericStyles.textInput as any}
          value={userName}
          onChangeText={(text) => setuserName(text)}
        />
        <Text style={genericStyles.textLabel}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={genericStyles.textInput}
          placeholderTextColor={genericStyles.textInput.color}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Ionicons.Button
            name="ios-log-in"
            onPress={handleLogin}
            style={genericStyles.button}
          >
            <Text style={genericStyles.textLabel}>Login</Text>
          </Ionicons.Button>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
