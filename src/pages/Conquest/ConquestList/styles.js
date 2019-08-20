import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 110
  },
  items: {
    flexDirection: "row",
    margin: 10
  },
  image: {
    height: 100,
    width: 87,
    resizeMode: "cover"
  },
  itemsDesc: {
    paddingLeft: 10,

    height: 100
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 16,
    color: "#C8C8C8"
  },
  stage: {
    paddingLeft: 10,
    fontSize: 14
  },
  progress: {
    marginTop: 15,
    height: 30,
    alignItems: "center",
    flexDirection: "row"
  }
});

export default styles;
