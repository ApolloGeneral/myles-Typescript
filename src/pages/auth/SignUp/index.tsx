import React, { useContext, useRef, useState } from "react";
import { Image, Button, Pressable, Text, View } from "react-native";
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

export default function Login() {
  /* States */
  const [togglePassword] = useState<boolean>(false);
  /* Context */
  const { setIsSigned } = useContext<any>(UserContext);

  /* Refs */
  const politicsRef = useRef<any>(null);

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Por favor, insira seu nome"),
    sobrenome:Yup.string().required("Por favor, insira seu sobrenome"),
    email: Yup.string() // Tipo do campo
      .email("Por favor, digite um email válido") // Tipo de verificação e mensagem de erro
      .required("Por favor, digite seu email"), // Se ele é obrigatorio ou não
    password: Yup.string().required("Digite sua senha"),
    passwordConfirm: Yup.string().required("Por favor, cofirme sua senha")
  });

  const onPressPoliticsMe = () => {
    politicsRef.current.onPress();
  };

  const onPressSignUp = () => {
    alert("Sign Up!");
  };

  const handleLogin = (values: {
    name: string,
    sobrenome: string,
    email: string;
    password: string;
    passwordConfirm: string,
    Politics: boolean;
  }) => {
    if (values) {
      console.log("login ok", values);
    } else {
      console.log("login error");
    }
  };

  return (
    <View style={styles.formWrapper}>
      <Formik
        initialValues={{ name: "", sobrenome:"", email: "", password: "", passwordConfirm:"", Politics: false }}
        validationSchema={LoginSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.formContainer}>
            <Image
              source={require("./assets/logo-crop-png.png")}
              style={{ width: 200, height: 120, marginBottom: 24 }}
            />
            {errors.email || errors.password ? (
              <View style={styles.errorModal}>
                <Text style={styles.errorText}>
                  <View style={{ marginBottom: 12 }}>
                    <Icon
                      name="exclamation-triangle"
                      size={18}
                      color="#fefefe"
                    />
                  </View>
                  {errors.email && "\n" + errors.email}
                  {errors.password && "\n" + errors.password}
                </Text>
              </View>
            ) : null}

            <View>
            <FloatingLabelInput
                containerStyles={inputStyle}
                inputStyles={inputTextStyle}
                customLabelStyles={labelInput}
                label={"Nome:"}
                value={values.name}
                onChangeText={handleChange("name")}
              />
              <FloatingLabelInput
                containerStyles={inputStyle}
                inputStyles={inputTextStyle}
                customLabelStyles={labelInput}
                label={"Sobrenome:"}
                value={values.sobrenome}
                onChangeText={handleChange("sobrenome")}
              />
              <FloatingLabelInput
                containerStyles={inputStyle}
                inputStyles={inputTextStyle}
                customLabelStyles={labelInput}
                label={"Email:"}
                value={values.email}
                onChangeText={handleChange("email")}
              />

              <FloatingLabelInput
                containerStyles={inputStyle}
                inputStyles={inputTextStyle}
                customLabelStyles={labelInput}
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

<FloatingLabelInput
                containerStyles={inputStyle}
                inputStyles={inputTextStyle}
                customLabelStyles={labelInput}
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

              <View style={styles.rememberMeContainer}>
                <BouncyCheckbox
                  style={styles.PoliticsCheckbox}
                  size={18}
                  fillColor="#481fa1"
                  unfillColor="transparent"
                  iconStyle={{ borderColor: "#fefefe" }}
                  onPress={(isChecked: boolean) => {
                    values.Politics = isChecked;
                  }}
                  ref={politicsRef}
                />
                <Pressable onPress={onPressPoliticsMe}>
                  <Text style={styles.rememberMeLabel}>Li e concordo com os termos de uso.</Text>
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

      <Button title="aaa" onPress={() => setIsSigned(true)} />
    </View>
  );
}
