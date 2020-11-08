import React, { useContext, useRef, useState } from "react";
import { Image, Button, Pressable, Text, View, ScrollView } from "react-native";
import { UserContext } from "../../../context/UserContext";
import {
  styles,
  inputTextStyle,
  inputStyle,
  labelInput,
} from "../../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingLabelInput } from "react-native-floating-label-input";
import GradientButton from "react-native-gradient-buttons";

import Icon from "react-native-vector-icons/FontAwesome";

import { Formik } from "formik";
import * as Yup from "yup";
import { handleLogin } from "../../../services/apis";

export default function Login() {
  /* States */
  const [togglePassword] = useState<boolean>(false);
  /* Context */
  const { setIsSigned } = useContext<any>(UserContext);

  /* Refs */
  const rememberRef = useRef<any>(null);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Por favor, digite seu username"),
    password: Yup.string().required("Digite sua senha"),
  });

  const onPressRememberMe = () => {
    rememberRef.current.onPress();
  };

  const onPressSignUp = () => {
    alert("Sign Up!");
  };

  const handleLoginButton = (values: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => {
    if (values) {
      handleLogin({ username: values.username, password: values.password });
      console.log("login ok", values);
    } else {
      console.log("login error");
    }
  };

  return (
    <View style={styles.formWrapper}>
      <ScrollView style={{ paddingTop: 100 }}>
        <Formik
          initialValues={{ username: "", password: "", rememberMe: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLoginButton(values)}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View style={styles.formContainer}>
              <Image
                source={require("./assets/logo-crop-png.png")}
                style={{ width: 200, height: 120, marginBottom: 24 }}
              />

              <View>
                <FloatingLabelInput
                  containerStyles={{
                    ...inputStyle,
                    borderColor: errors.username ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.username ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.username ? "#FF4842" : "#fefefe",
                    colorBlurred: errors.username ? "#FF484260" : "#fefefe60",
                  }}
                  label={"User:"}
                  value={values.username}
                  onChangeText={handleChange("username")}
                />
                {errors.username ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.username && "\n" + errors.username}
                    </Text>
                  </View>
                ) : null}

                <FloatingLabelInput
                  containerStyles={{
                    ...inputStyle,
                    borderColor: errors.password ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.password ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.password ? "#FF4842" : "#fefefe",
                    colorBlurred: errors.password ? "#FF484260" : "#fefefe60",
                  }}
                  label={"Senha:"}
                  isPassword
                  togglePassword={togglePassword}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  customShowPasswordComponent={
                    <Icon
                      name="eye"
                      size={20}
                      color={errors.password ? "#FF484260" : "#fefefe"}
                    />
                  }
                  customHidePasswordComponent={
                    <Icon
                      name="eye-slash"
                      size={20}
                      color={errors.password ? "#FF4842" : "#fefefe"}
                    />
                  }
                />
                {errors.password ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.password && "\n" + errors.password}
                    </Text>
                  </View>
                ) : null}

                <View style={styles.rememberMeContainer}>
                  <BouncyCheckbox
                    style={styles.rememberMeCheckbox}
                    size={18}
                    fillColor="#481fa1"
                    unfillColor="transparent"
                    iconStyle={{ borderColor: "#fefefe" }}
                    onPress={(isChecked: boolean) => {
                      values.rememberMe = isChecked;
                    }}
                    ref={rememberRef}
                  />
                  <Pressable onPress={onPressRememberMe}>
                    <Text style={styles.rememberMeLabel}>Lembrar</Text>
                  </Pressable>
                </View>
              </View>
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
                  onPressAction={(e: any) => handleSubmit(e)}
                />
                <Pressable onPress={onPressSignUp}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#fefefe",
                      fontSize: 14,
                    }}
                  >
                    Não possui conta?{"  "}
                    <Text style={{ color: "#FDA437", fontWeight: "700" }}>
                      Crie agora!
                    </Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <Button title="aaa" onPress={() => setIsSigned(true)} />
    </View>
  );
}
