import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainScreen, VideoScreen } from "../screens";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style:{
          backgroundColor: "#000",
          borderTopWidth: 0,
          position: "absolute",
          borderBottomWidth: 0,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/bottomNav/Home.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/bottomNav/Notes.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabBar;
