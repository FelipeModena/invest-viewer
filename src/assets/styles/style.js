// styles.js

import { StyleSheet } from 'react-native';

const genericStyles = StyleSheet.create({
  textInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.3,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    color: '#000',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default genericStyles;
