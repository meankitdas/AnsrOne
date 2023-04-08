import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Youtube } from "../components";

const VideoScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.video}>
        <Youtube />
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.text}>
          Class...>Chapter one><Text style={styles.red}>Number System</Text>
        </Text>
        <View style={}>
          <Text>Number System | Lecture 1 | Class 6th</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#13192e",
    width: "100%",
    height: "100%",
    marginTop: 25,
  },
  titleBar: {
    backgroundColor: "#3e4a74",
    height: 55,
  },
  video: {
    height: 230,
    width: "100%",
  },
  text: {
    marginLeft: 10,
    fontSize: 10,
    marginTop: 5,
    color: "#fff",
    fontStyle: "italic",
  },
  red: {
    color: "#ff0000",
    
  }
});

export default VideoScreen;
