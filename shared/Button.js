import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
function Button({ text, onPress, bkColor, textColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: bkColor }}>
        <Text style={{ ...styles.buttonText, color: textColor }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "green",
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold"
  }
});
