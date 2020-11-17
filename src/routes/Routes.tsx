import React from "react";

//Navigation
import Home from "../pages/app/Home";
import AddMiles from "../pages/app/AddMiles";
import MyAccount from "../pages/app/MyAccount";
import MilesPrice from "../pages/app/CompaniesPrice"

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ title: "Myles" }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddMiles" component={AddMiles} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="MilesPrice" component={MilesPrice} />
    </Stack.Navigator>
  );
}
