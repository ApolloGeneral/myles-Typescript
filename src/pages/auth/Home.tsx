import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Sign home!</Text>
      <Button title="aaa" onPress={() => navigation.navigate("Login")} />
      <Button title="bbb" onPress={() => navigation.navigate("Sign Up")} />
      
    </View>
  );
}