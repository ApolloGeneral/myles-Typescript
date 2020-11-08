import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    color: "#FFF",
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
  // CARD
  CardContext: {
    backgroundColor: "#f1f1f1f1",
    width: "90%",
    height: 170,
    alignItems: "stretch",
    borderRadius: 10,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
      },
      android: {
        elevation: 15
      }
    })
  },
  ViewImageCard: {
    justifyContent: "center",
    width: "50%"
  },
  ImageCard: {
    width: 120,
    height: 60,
    borderRadius: 8,
    margin: 10,
    

  },
  ViewTextCard: {
    alignItems: "flex-start",
    width: "50%",
    justifyContent: "space-evenly",

  },
  TextCard: {
    color: "#000000",
    marginLeft: 10,
    marginVertical: -15

  }
});

/* Obj Styles */
export const inputStyle = {
  borderWidth: 0,
  borderBottomWidth: 2,
  borderColor: "#fefefe",
  paddingHorizontal: 2,
  paddingVertical: 4,
  paddingRight: 12,
  marginBottom: 24
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

