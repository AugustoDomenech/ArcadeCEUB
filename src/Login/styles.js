import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    alignItems: "center",
    padding: 50,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.37)",
    borderRadius: 30,
    minHeight: 250,
    maxHeight: 250,
    margin: 20,
    padding: 10
  },
  item: {
    padding: 0
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    color: "rgba(255, 255, 255, 0.7)"
  },
  txtBtnLogin: {
    fontSize: 20,
    color: "white"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.7)"
  }
});

export default styles;
