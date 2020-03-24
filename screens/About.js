import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import BkgImg from "../assets/game_bg.png";
const About = () => {
  return (
    <ImageBackground source={BkgImg} style={globalStyles.container}>
      <Text>This is about page</Text>
    </ImageBackground>
  );
};

export default About;
