import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { SliderBox } from "react-native-image-slider-box";
import { WebView } from "react-native-webview";
import ReactPlayer from "react-player";

import YoutubePlayer from "react-native-youtube-iframe";
import { MainScreen, VideoScreen } from "./app/screens";

import TabBar from "./app/routes/tabBar";

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
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
