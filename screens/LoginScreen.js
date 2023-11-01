import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
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
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="bg-white flex-1 px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-400 rounded-2xl mb-3"
            value="john@gmail.com"
            placeholder="Enter Email"
          ></TextInput>
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-3 bg-gray-100 rounded-2xl text-gray-400"
            secureTextEntry
            value="test12345"
            placeholder="Enter Password"
          ></TextInput>
          <TouchableOpacity className="flex items-end mb-5">
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-400 py-3 rounded-xl ">
            <Text className="font-xl text-center font-bold text-gray-600">
              Login
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
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="font-semibold text-yellow-400">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
