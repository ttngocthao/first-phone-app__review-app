import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground
} from "react-native";
import { globalStyles, heartImages } from "../styles/global";
import Card from "../shared/Card";
import BkgImg from "../assets/game_bg.png";
const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  const ratingHearts = navigation.getParam("rating");
  return (
    <ImageBackground source={BkgImg} style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <View style={styles.rating}>
          <Text style={globalStyles.bodyText}>Rating:</Text>
          <Image
            source={heartImages.ratings[ratingHearts]}
            style={styles.heartImg}
          />
        </View>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
        <Text style={globalStyles.bodyText}>{navigation.getParam("body")}</Text>
      </Card>
    </ImageBackground>
  );
};

export default ReviewDetails;
const styles = StyleSheet.create({
  rating: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row"
  },
  heartImg: {
    marginLeft: 20
  }
});
