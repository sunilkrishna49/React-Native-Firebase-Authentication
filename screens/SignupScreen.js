import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("Error Message: ", err.message);
      }
    }
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex mb-7">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-10"
            onPress={() => navigation.navigate("Welcome")}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/signup.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="bg-white flex-1 px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-900 rounded-2xl mb-3"
            value="john snow"
            placeholder="Enter Your Name"
          ></TextInput>
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-900 rounded-2xl mb-3"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter Email"
          ></TextInput>
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-2 bg-gray-100 rounded-2xl text-gray-900 mb-5"
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter Password"
          ></TextInput>

          <TouchableOpacity
            className="bg-yellow-400 py-3 rounded-xl"
            onPress={handleSubmit}
          >
            <Text className="font-xl text-center font-bold text-gray-600">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-bold text-center text-xl text-gray-600 py-5">
            Or
          </Text>
        </View>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="bg-gray-100 rounded-2xl p-2">
            <Image source={require("../assets/icons/google.png")} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-2xl">
            <Image source={require("../assets/icons/apple.png")} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-2xl">
            <Image source={require("../assets/icons/facebook.png")} />
          </TouchableOpacity>
        </View>
        <View className="flex-row mt-8 justify-center">
          <Text className="text-gray-400 font-semibold">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
