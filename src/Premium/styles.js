import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
    backgroundColor: "white",
    borderColor: "rgb(218,165,32)",
    borderWidth: 1,
    borderRadius: 5
  },
  containerImage: {
    margin: 15,
    justifyContent: "center"
  },
  containerInfo: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  description: {
    color: "#606060",
    margin: 10
  },
  button: {
    height: 45,
    borderRadius: 45,
    margin: 10,
    backgroundColor: "rgb(255,215,0)",
    color: "black",
    borderColor: "rgb(218,165,32)",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});

export default styles;
