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
      
      <MainScreen />
     
      
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
