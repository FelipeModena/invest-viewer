// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setAuthData } from '../../actions/authActions';

import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../services/firebase/firebase.config";
import { Alert } from "react-native";

const authenticate = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const authFirebase = FIREBASE_AUTH;
  try {
    const response = await signInWithEmailAndPassword(
      authFirebase,
      username,
      password
    );
    return true;
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Invalid username or password");
    return false;
  }
};

export default authenticate;
