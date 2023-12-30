import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function HomeScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("Error Message: ", err.Message);
    }
  };
  return (
    <SafeAreaView className="flex-1 flex-row justify-center  items-center">
      <Text className="text-lg">HomePage - </Text>
      <TouchableOpacity
        className="bg-red-400 p-2 rounded-xl"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
