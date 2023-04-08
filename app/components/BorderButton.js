import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const BorderButton = (props) => {
  const { onPress, title = "Notes" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 2,
    width: "40%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default BorderButton;
