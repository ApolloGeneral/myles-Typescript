import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoadingScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#4B21A6'}}>
      <Image source={require('./splash.gif')} />
    </SafeAreaView>
  );
};
