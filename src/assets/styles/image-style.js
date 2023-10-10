//make a js file with config for small,medium,large images for react-native app

// Path: src/assets/styles/image-style.js

import { StyleSheet } from "react-native";
const imageStyle = StyleSheet.create({
  small: {
    width: 100,
    height: 100,
  },
  medium: {
    width: 200,
    height: 200,
  },
  large: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  xlarge: {
    width: 400,
    height: 400,
  },
});

export default imageStyle;
