import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 20,
    color: "#333"
  },
  bodyText: {
    fontSize: 17,
    color: "#48494b"
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 20
  },
  modalContent: {},
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ec5578",
    padding: 10,
    fontSize: 17
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 5,
    textTransform: "capitalize"
  }
});
export const heartImages = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png")
  }
};
