import React, { useState } from "react";
import Home from "./screens/Home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigation from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "font-bold": require("./fonts/Quicksand-Bold.ttf"),
    "font-regular": require("./fonts/Quicksand-Regular.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigation />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />
    );
  }
}
