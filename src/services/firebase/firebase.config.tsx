// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

console.log("firebase.config.tsx");

const firebaseConfig = {
  apiKey: process.env.EXPO_APIKEY,
  authDomain:  process.env.EXPO_AUTHDOMAIN,
  projectId:  process.env.EXPO_PROJECTID,
  storageBucket:  process.env.EXPO_STORAGEBUCKET,
  messagingSenderId:  process.env.EXPO_MESSAGINGSENDERID,
  appId:  process.env.EXPO_APPID,
  measurementId:  process.env.EXPO_MEASUREMENTID,
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const firebaseAnalytics = getAnalytics(firebaseApp);

export { FIREBASE_APP };
