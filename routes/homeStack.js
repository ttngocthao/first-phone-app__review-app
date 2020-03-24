import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import React from "react";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => {
          return <Header navigation={navigation} title="Review App" />;
        }
      };
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Details"
    }
  }
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "pink", height: 80 }
    // headerTitleAlign: "center"
    // headerTitleStyle: {
    //   fontWeight: "bold"
    // }
  }
});

export default HomeStack;
