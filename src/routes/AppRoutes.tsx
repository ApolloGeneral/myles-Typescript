import React from "react";

//Navigation
import Home from "../pages/app/Home";
import AddMiles from "../pages/app/AddMiles";
import MyAccount from "../pages/app/MyAccount";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fefefe"
          inactiveColor="#886bc7"
          barStyle={{ padding: 12, backgroundColor: '#481fa1' }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Principal',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="AddMiles"
            component={AddMiles}
            options={{
              tabBarLabel: 'Adicionar',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              tabBarLabel: 'Minha Conta',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
