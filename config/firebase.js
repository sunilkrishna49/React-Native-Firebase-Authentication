import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getReactNativePersistence } from "firebase/auth"; // Import getReactNativePersistence
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyApX5At5NYaaDiftWfpTE51znNSBpenlEw",
  authDomain: "reactnative-login-signup-ff3e1.firebaseapp.com",
  projectId: "reactnative-login-signup-ff3e1",
  storageBucket: "reactnative-login-signup-ff3e1.appspot.com",
  messagingSenderId: "401886370112",
  appId: "1:401886370112:web:c867129c03767aefce82a5",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
