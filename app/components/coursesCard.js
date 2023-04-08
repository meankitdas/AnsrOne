import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from "@expo-google-fonts/source-sans-pro";

const CoursesCard = ({ title }) => {
  let [fontsLoaded] = useFonts({
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.box}>
        <View style={styles.up}>
          <Text style={styles.text}>{title}</Text>
          <Image
            source={require("../../assets/man.png")}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.join}>Join now</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    width: 350,
    backgroundColor: "#ffc727",
    height: 160,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 130,
  },
  bottom: {
    width: 350,
    height: 40,
    backgroundColor: "#ff242a",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 200,
    // backgroundColor: "#24e9ff",
    marginLeft: 15,
    marginTop: 17,
    color: "#fff",
    fontFamily: "SourceSansPro_700Bold",
    fontSize: 16,
  },
  up: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 0,
  },
  join: {
    fontFamily: "SourceSansPro_700Bold",
    color: "#fff",
    fontSize: 17,
  },
});

export default CoursesCard;
