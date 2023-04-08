import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
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

import AppLoading from "expo-app-loading";

const CohotCard = ({title, image}) => {
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
        
          <Text style={styles.title}>{title}</Text>
        

        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    width: 195,
    backgroundColor: "#fe5242",
    height: 130,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
    marginLeft: 20
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginTop: 32,
    fontFamily: "SourceSansPro_600SemiBold",
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    width: 190,
    marginTop: 15,
    marginLeft: 10,
  },
});

export default CohotCard;
