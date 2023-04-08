import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Download from "react-native-vector-icons/Feather";

const SearchBar = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.menu}>
      <Download name="search" size={20} color="#fff" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="TYPE HERE"
        keyboardType="default"
        placeholderTextColor="#6d7694"
        icon="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    marginLeft: 2,
  },
  menu: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: 250,
    borderRadius: 15,
    
    borderColor: "#fff",
    backgroundColor: "#5d6788",
    fontWeight: "bold",
    borderWidth: 2,
  },
  input: {
    fontWeight: "bold",
    width: 200,
    color: "#fff",
  },
});

export default SearchBar;
