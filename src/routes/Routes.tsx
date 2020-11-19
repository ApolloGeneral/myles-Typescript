import React from "react";

//Navigation
import Home from "../pages/app/Home";
import AddMiles from "../pages/app/AddMiles";
import MyAccount from "../pages/app/MyAccount";



import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddMiles" component={AddMiles} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      
      
    </Stack.Navigator>
  );
}
