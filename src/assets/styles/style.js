// styles.js

import { StyleSheet } from "react-native";

const commonColor = {
  commonWhite: "#FFFFFF",
  primaryColor: "#8D41BF",
  secondaryColor: "#41BF8D",
  tertiaryColor: "#8D41BF",
  commonBlack: "#000000",
  lighterBlack: "#333333",
};

const light = {
  themeColor: "#FFFFFF",
  white: "#000000",
  text: "#000000",
  sky: "#DE5E69",
  gray: "gray",
  ...commonColor,
};

const dark = {
  themeColor: "#000000",
  white: "#FFFFFF",
  text: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  ...commonColor,
};

const genericStyles = StyleSheet.create({
  body: {
    backgroundColor: "#272727",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  textInput: {
    height: 30,
    width: 200,
    borderColor: "gray",
    color: "#FFFFFF",
    borderWidth: 0.3,
    paddingHorizontal: 5,
    backgroundColor: "#A6A3A3",
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: commonColor.primaryColor,
  },
});

export { genericStyles, light, dark,commonColor };
