import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginErrorModal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4842df",
    padding: 24,
    marginVertical: 100,
    margin: 32,
    zIndex: 99,
    borderRadius: 4,
  },
  loginTitleErrorModal: {
    color: "#fefefe",
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 22,
    lineHeight: 40,
    marginBottom: 8
  },
  loginTextErrorModal: {
    color: "#fefefeef",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
  },
  errorModal: {
    width: 300,
    marginTop: -36,
    marginBottom: 24,
  },
  errorText: {
    color: "#FF4842",
    fontWeight: "800",
    textAlign: "left",
    fontSize: 14,
    lineHeight: 20,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  formWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#481fa1",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    width: 240,
    borderRadius: 25,
    margin: 12,
    padding: 12,
    paddingHorizontal: 20,

    backgroundColor: "#481fa160",
    color: "#fefefe",
  },
  rememberMeContainer: {
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
  },
  rememberMeCheckbox: {
    width: 22,
    marginRight: 4,
  },
  PoliticsCheckbox: {
    width: 22,
    marginRight: 4,
  },
  rememberMeLabel: {
    width: 278,
    fontSize: 18,
    color: "#fefefe",
  },
});

/* Obj Styles */
export const inputStyle = {
  borderWidth: 0,
  borderBottomWidth: 2,
  borderColor: "#fefefe",
  paddingHorizontal: 2,
  paddingVertical: 4,
  paddingRight: 12,
  marginBottom: 24,
};

export const inputTextStyle = {
  fontSize: 18,
};

export const labelInput = {
  fontSizeBlurred: 18,
  fontSizeFocused: 12,
  colorBlurred: "#fefefeaa",
  leftFocused: -6,
  topFocused: -24,
};
