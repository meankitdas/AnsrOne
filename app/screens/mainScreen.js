import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Image } from "expo-image";

import Icon from "react-native-vector-icons/Entypo";
import Download from "react-native-vector-icons/Feather";
import WhiteDot from "react-native-vector-icons/Entypo";
import Arrow from "react-native-vector-icons/MaterialIcons";
import Space from "../../assets/astronaut.png";

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

import { SearchBar, CoursesCard, CohotCard } from "../components";

const MainScreen = () => {
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

  const Data = [
    {
      id: 1,
      title: "JEE 2023 | Complete Maths Revision | One Shot | Arvind Kalia Sir",
    },
    {
      id: 2,
      title: "JEE 2023 | Complete Maths Revision | One Shot | Arvind Kalia Sir",
    },
    {
      id: 3,
      title: "JEE 2023 | Complete Maths Revision | One Shot | Arvind Kalia Sir",
    },
  ];

  const Courses = [
    {
      id: 1,
      title: "Class 6th",
      image: require("../../assets/ninja.png"),
    },
    {
      id: 2,
      title: "Maths",
      image: require("../../assets/pie.png"),
    },
  ];

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.bg}>
        <View style={styles.navBar}>
          <Icon name="menu" size={40} color="#fff" />
          <SearchBar />
          <Download name="download" size={30} color="#fff" />
        </View>
        {/* <ImageSlider /> */}
        <View style={styles.image}>
          <View style={styles.imageCom}>
            <View></View>
          </View>
          <View style={styles.dot}>
            <WhiteDot name="dot-single" size={35} color="#fff" />
            <WhiteDot name="dot-single" size={35} color="#5069be" />
            <WhiteDot name="dot-single" size={35} color="#5069be" />
          </View>
        </View>

        {/* Name  */}
        <View style={styles.section}>
          <Text style={styles.title}>Hi, Sneha</Text>
          {/* <Image source={Space} style={styles.space} /> */}
        </View>

        {/* Live  */}
        <View style={styles.live}>
          <Text style={styles.liveText}>Live</Text>
          <View style={styles.dott}>
            <WhiteDot name="dot-single" size={35} color="#ff242a" />
          </View>
        </View>
        {/* //   Courses Card */}
        <View style={styles.card}>
          <FlatList
            data={Data}
            horizontal
            renderItem={({ item }) => {
              return <CoursesCard title={item.title} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* <cohort based /> */}
        <View>
          <View style={styles.courseTitle}>
            <Text style={styles.course}>Cohort Based Courses</Text>
            <Arrow name="arrow-forward-ios" size={18} color="#fff" />
          </View>
          <FlatList
            data={Courses}
            horizontal
            renderItem={({ item }) => {
              return <CohotCard title={item.title} image={item.image} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navBar: {
    height: 55,
    backgroundColor: "#3e4a74",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: 230,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageCom: {
    height: 170,
    backgroundColor: "#343a4e",
    width: 370,
    borderRadius: 10,
    marginTop: 20,
  },
  dot: {
    display: "flex",
    flexDirection: "row",
  },
  bg: {
    backgroundColor: "#13192e",
    height: "100%",
  },
  title: {
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 35,
    color: "#fff",
  },
  section: {
    marginLeft: 20,
  },
  space: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  live: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  liveText: {
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 25,
    color: "#e15a48",
    marginLeft: 20,
  },
  dott: {
    marginTop: 5,
  },
  card: {
    height: 200,
  },
  course: {
    fontFamily: "SourceSansPro_400Regular",
    color: "#fff",
    fontSize: 22,
    marginLeft: 20,
    marginRight: 10,
  },
  courseTitle: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default MainScreen;
