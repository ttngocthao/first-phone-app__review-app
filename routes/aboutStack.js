import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/Header";
import About from "../screens/About";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => {
          return <Header navigation={navigation} title="About Review App" />;
        }
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "pink", height: 80 }
  }
});

export default AboutStack;
