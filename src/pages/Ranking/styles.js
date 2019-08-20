import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(98, 78, 165)"
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 15
  },
  ctRankDestaque: {
    // backgroundColor: "black",
    flexDirection: "row"
  },
  containerTrPrata: {
    // backgroundColor: "rgb(127, 186, 151)",
    alignItems: "center",
    width: "30%"
  },
  containerTrOuro: {
    alignItems: "center",
    // backgroundColor: "rgb(255, 0, 102)",
    width: "40%"
  },
  containerTrBronze: {
    alignItems: "center",
    // backgroundColor: "rgb(255, 153, 0)",
    width: "30%"
  },
  imgOuro: {
    // resizeMode: "contain",
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    margin: 10
  },
  imgPrata: {
    // resizeMode: "contain",
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    margin: 10,
    marginTop: 68
  },
  imgBronze: {
    // resizeMode: "contain",
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    margin: 10,
    marginTop: 68
  },
  textTrofeu: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10
  },
  containerList: {
    margin: 20,
    marginTop: 0,
    backgroundColor: "rgb(113, 89, 193)",
    alignItems: "stretch"
    // justifyContent: "flex-start"
  }
});

export default styles;
