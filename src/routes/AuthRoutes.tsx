import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Navigation
import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import MilesPrice from "../pages/app/CompaniesPrice"

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: "slide_from_right",
        headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: "#fefefe",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Miles Price" component={MilesPrice} />

      
    </Stack.Navigator>
  );
}
