import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Navigation
import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import CompaniesPrice from "../pages/app/components/Slider/index"
import Slider from "../pages/app/components/Slider/index";
import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Slider"
        screenOptions={{
          animation: "slide_from_right",
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: "#fefefe",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={SignUp} />
        <Stack.Screen name="Venda suas milhas" component={CompaniesPrice} />
        <Stack.Screen name="Slider" component={Slider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
