import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Youtube, Button, BorderButton, VideoComponent } from "../components";

const VideoScreen = () => {
  const Data = [
    {
      id: 1,
      title: "Number System",
    },
    {
      id: 2,
      title: "Number System",
    },
    {
      id: 3,
      title: "Number System",
    },
    {
      id: 4,
      title: "Number System",
    },
    {
      id: 5,
      title: "Number System",
    },
    {
      id: 6,
      title: "Number System",
    },
    {
      id: 7,
      title: "Number System",
    },
  ];
  return (
    <View style={styles.page}>
      <View style={styles.video}>
        <Youtube />
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.text}>
          Class...>Chapter one><Text style={styles.red}>Number System</Text>
        </Text>
        <View style={styles.view}>
          <Text style={styles.title}>
            Number System | Lecture 1 | Class 6th
          </Text>
        </View>
      </View>
      {/* videos ----------> */}
      <View style={styles.playlist}>
        <View style={styles.btn}>
          <Button />
          <BorderButton />
        </View>
        <View style={styles.videos}>
          <FlatList
            data={Data}
            renderItem={({ item }) => {
              return <VideoComponent />;
            }}
            keyExtractor={(item) => item.id}
          />
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
    // backgroundColor: "#3e4a74",
    height: 120,
  },
  video: {
    height: 230,
    width: "100%",
  },
  text: {
    marginLeft: 10,
    fontSize: 10,
    marginTop: 10,
    color: "#fff",
    fontStyle: "italic",
  },
  red: {
    color: "#ff0000",
  },
  view: {
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  playlist: {
    backgroundColor: "#202a51",
    height: "70%",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  videos: {
    marginTop: 15,
    marginBottom: 55,
  },
});

export default VideoScreen;
