import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "../../../styles/styles";

import GradientButton from "react-native-gradient-buttons";

export default ({ navigation }: any) => {
  const handleSubmit = (route: string) => {
    navigation.navigate(route)
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../Login/assets/logo-crop-png.png")}
        style={{ width: 200, height: 120, marginBottom: 24 }}
      />
      <Text style={styles.textTitle}>Escolha como continuar:</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <GradientButton
          style={{ marginTop: 24, marginBottom: 18 }}
          text="Entrar"
          textStyle={{ fontSize: 18, fontWeight: "900" }}
          gradientBegin="#FDA437"
          gradientEnd="#F2DA5E"
          gradientDirection="diagonal"
          height={50}
          width={260}
          radius={200}
          impact
          impactStyle="Light"
          onPressAction={() => handleSubmit('Login')}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <GradientButton
          style={{ marginTop: 24, marginBottom: 18 }}
          text="Registrar"
          textStyle={{ fontSize: 18, fontWeight: "900" }}
          gradientBegin="#FDA437"
          gradientEnd="#F2DA5E"
          gradientDirection="diagonal"
          height={50}
          width={260}
          radius={200}
          impact
          impactStyle="Light"
          onPressAction={() => handleSubmit('Registro')}
        />
      </View>
    </View>
  );
};
