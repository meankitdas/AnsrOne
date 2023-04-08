import { Text, View, StyleSheet } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Youtube() {
  return (
    <YoutubePlayer
      height={300}
      play={true}
      videoId={"l1s0nYaZBfM"}
      initialPlayerParams={{
        controls: false,
        modestBranding: true,
      }}
    />
  );
}
