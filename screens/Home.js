import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BkgImg from "../assets/game_bg.png";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";
const Home = ({ navigation }) => {
  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  //   //the same
  //   //navigation.push('ReviewDetails')
  // };
  const [reviews, setReviews] = useState([
    { title: "Title A", rating: 5, body: "lorem ipsum 1", key: "1" },
    { title: "Title B", rating: 4, body: "lorem ipsum 2", key: "2" },
    { title: "Title C", rating: 3, body: "lorem ipsum 3", key: "3" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const addReview = review => {
    review.key = Math.random().toString();

    setReviews([review, ...reviews]);
    setModalOpen(false);
  };
  return (
    <ImageBackground source={BkgImg} style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={40}
              color="darkgrey"
              style={{ ...styles.iconImg, ...styles.closeIcon }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="playlist-add"
        size={50}
        color="darkgrey"
        style={styles.iconImg}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.bodyText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />

      {/* <Button title="View review in details" onPress={pressHandler} /> */}
    </ImageBackground>
  );
};

export default Home;
const styles = StyleSheet.create({
  iconImg: {
    alignSelf: "center"
  },
  closeIcon: {
    alignSelf: "flex-end"
  },
  modalContent: {
    flex: 1
  }
});
