import React, { useRef, useState } from "react";
import { Image, Pressable, Text, View, ScrollView } from "react-native";
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
import { handleSignUpApi } from "../../../services/apis";

export default function Login() {
  /* States */
  const [togglePassword] = useState<boolean>(false);

  /* Refs */
  const politicsRef = useRef<any>(null);

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .required("Por favor, insira seu nome")
      .matches(/^[aA-zZ\s]+$/, "Use apenas letras em seu nome, por favor"),
    sobrenome: Yup.string()
      .required("Por favor, insira seu sobrenome")
      .matches(/^[aA-zZ\s]+$/, "Use apenas letras em seu sobrenome, por favor"),
    email: Yup.string() // Tipo do campo
      .email("Por favor, digite um email válido") // Tipo de verificação e mensagem de erro
      .required("Por favor, digite seu email"), // Se ele é obrigatorio ou não
    password: Yup.string().required("Digite sua senha"),
    passwordConfirm: Yup.string()
      .required("Por favor, cofirme sua senha")
      .oneOf([Yup.ref("password"), null], "Senha incorreta, arrume por favor"),
    politics: Yup.boolean()
      .required("Por favor, aceite os termos de uso")
      .oneOf([true], "Por favor, aceite os termos de uso"),
  });

  const onPressPoliticsMe = () => {
    politicsRef.current.onPress();
  };

  const handleSignUp = async (values: {
    name: string;
    sobrenome: string;
    email: string;
    password: string;
    passwordConfirm: string;
    politics: boolean;
  }) => {
    if (values) {
      const userData = await handleSignUpApi(
        values.name,
        values.email,
        values.password
      );
      if (userData.error) {
        console.log("sign error", userData);
      } else {
        console.log("sign ok", userData);
      }
    } else {
      console.log("login error");
    }
  };

  return (
    <View style={styles.formWrapper}>
      <ScrollView style={{ paddingTop: 100 }}>
        <Formik
          initialValues={{
            name: "",
            sobrenome: "",
            email: "",
            password: "",
            passwordConfirm: "",
            politics: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleSignUp(values)}
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
                    borderColor: errors.name ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.name ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.name ? "#FF4842" : "#fefefe",
                    colorBlurred: errors.name ? "#FF484260" : "#fefefe60",
                  }}
                  label={"Nome:"}
                  value={values.name}
                  onChangeText={handleChange("name")}
                />
                {errors.name ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.name && "\n" + errors.name}
                    </Text>
                  </View>
                ) : null}

                <FloatingLabelInput
                  containerStyles={{
                    ...inputStyle,
                    borderColor: errors.sobrenome ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.sobrenome ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.sobrenome ? "#FF4842" : "#fefefe",
                    colorBlurred: errors.sobrenome ? "#FF484260" : "#fefefe60",
                  }}
                  label={"Sobrenome:"}
                  value={values.sobrenome}
                  onChangeText={handleChange("sobrenome")}
                />
                {errors.sobrenome ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.sobrenome && "\n" + errors.sobrenome}
                    </Text>
                  </View>
                ) : null}

                <FloatingLabelInput
                  containerStyles={{
                    ...inputStyle,
                    borderColor: errors.email ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.email ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.email ? "#FF4842" : "#fefefe",
                    colorBlurred: errors.email ? "#FF484260" : "#fefefe60",
                  }}
                  label={"Email:"}
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                {errors.email ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.email && "\n" + errors.email}
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
                    <Icon name="eye" size={20} color="#fefefeaa" />
                  }
                  customHidePasswordComponent={
                    <Icon name="eye-slash" size={20} color="#fefefe" />
                  }
                />
                {errors.password ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.password && "\n" + errors.password}
                    </Text>
                  </View>
                ) : null}

                <FloatingLabelInput
                  containerStyles={{
                    ...inputStyle,
                    borderColor: errors.passwordConfirm ? "#FF4842" : "#fefefe",
                  }}
                  inputStyles={{
                    ...inputTextStyle,
                    color: errors.passwordConfirm ? "#FF4842" : "#fefefe",
                  }}
                  customLabelStyles={{
                    ...labelInput,
                    colorFocused: errors.passwordConfirm
                      ? "#FF4842"
                      : "#fefefe",
                    colorBlurred: errors.passwordConfirm
                      ? "#FF484260"
                      : "#fefefe60",
                  }}
                  label={"Confime sua senha:"}
                  isPassword
                  togglePassword={togglePassword}
                  value={values.passwordConfirm}
                  onChangeText={handleChange("passwordConfirm")}
                  customShowPasswordComponent={
                    <Icon name="eye" size={20} color="#fefefeaa" />
                  }
                  customHidePasswordComponent={
                    <Icon name="eye-slash" size={20} color="#fefefe" />
                  }
                />
                {errors.passwordConfirm ? (
                  <View style={styles.errorModal}>
                    <Text style={styles.errorText}>
                      {errors.passwordConfirm && "\n" + errors.passwordConfirm}
                    </Text>
                  </View>
                ) : null}

                <View style={styles.rememberMeContainer}>
                  <BouncyCheckbox
                    style={styles.PoliticsCheckbox}
                    size={18}
                    fillColor="#481fa1"
                    unfillColor="transparent"
                    iconStyle={{
                      borderColor: errors.politics ? "#FF4842" : "#fefefe",
                    }}
                    onPress={(isChecked: boolean) => {
                      values.politics = isChecked;
                    }}
                    ref={politicsRef}
                  />
                  <Pressable onPress={onPressPoliticsMe}>
                    <Text
                      style={{
                        ...styles.rememberMeLabel,
                        color: errors.politics ? "#FF4842" : "#fefefe",
                      }}
                    >
                      Li e concordo com os termos de uso.
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <GradientButton
                  style={{ marginTop: 24, marginBottom: 18 }}
                  text="Registrar-se"
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
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
