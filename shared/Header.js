import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LogoImg from "../assets/heart_logo.png";
//menuunfold

const Header = ({ navigation, title }) => {
  const menuHandler = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <AntDesign
        name="menuunfold"
        size={30}
        onPress={menuHandler}
        style={styles.menuIcon}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.headerText}>{title}</Text>
        <Image source={LogoImg} style={styles.logoImg} />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 50,
    letterSpacing: 1,
    color: "#5b5750"
  },
  menuIcon: {
    position: "absolute",
    left: 0,
    color: "#5b5750"
  },
  logoImg: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
});
