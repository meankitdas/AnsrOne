import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const VideoComponent = () => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={require("../../assets/thumbnail.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.topic}>Science</Text>
        <Text style={styles.title}>Number System</Text>
        <Text style={styles.lecture}>Lecture 2</Text>
        <Text style={styles.class}>Class 6th</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: "#fff",
    height: 120,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 180,
    borderRadius: 10,
    marginLeft: 25,
  },
  topic: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f3f4f6",
  },
  class: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  lecture: {
    color: "#fff",
  },
  titleBox: {
    marginLeft: 20,
    justifyContent: "space-evenly",
  },
});

export default VideoComponent;
