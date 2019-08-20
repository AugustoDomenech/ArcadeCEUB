import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "red",
    backgroundColor: "rgb(113, 89, 193)",
    height: 70,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  containerImage: {
    flexDirection: "row",
    width: 110,
    height: 70,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  posicaoText: {
    marginLeft: 2,
    marginRight: 10,
    fontSize: 20,
    color: "rgb(198, 189, 230)",
    fontWeight: "bold"
  },
  image: {
    // resizeMode: "contain",
    height: 60,
    width: 60,
    borderRadius: 60 / 2
  },
  nome: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
    fontWeight: "500"
  },
  curso: {
    marginTop: 10,
    color: "rgb(198, 189, 230)",
    fontSize: 14
  },
  containerPontos: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "red"
  },
  pontos: {
    flex: 1,
    margin: 2,
    fontSize: 19,
    alignSelf: "center",
    textAlign: "right",
    fontWeight: "bold",
    color: "white"
  },
  div: {
    height: 1,
    marginHorizontal: 60,
    marginTop: 2,
    backgroundColor: "white"
  }
});

export default styles;
