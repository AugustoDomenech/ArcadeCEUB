import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    backgroundColor: "white",
    borderColor: "rgb(30,196,222)",
    borderWidth: 1,
    borderRadius: 5
  },
  containerImage: {
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
    backgroundColor: "rgb(30,196,222)",
    color: "black",
    borderColor: "rgb(135,206,250)",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;
