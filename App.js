import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { SliderBox } from "react-native-image-slider-box";
import { WebView } from "react-native-webview";
import ReactPlayer from "react-player";

import YoutubePlayer from "react-native-youtube-iframe";
import { MainScreen, VideoScreen } from "./app/screens";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Text>Hello</Text> */}
      <VideoScreen />
      {/* <YoutubePlayer
      height={300}
      play={true}
      videoId={"l1s0nYaZBfM"}
      initialPlayerParams={{
        controls: 0,
        modestBranding: 1,
        rel: 0,
        iv_load_policy: 3,
        disablekb: 1,
      }}
    /> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "stretch",
    height: 300,
  },
});
