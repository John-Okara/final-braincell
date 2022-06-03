import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PictureOne from "./src/screens/01Picture/picture.one.screen";
import PictureTwo from "./src/screens/02Picture/picture.two.screen";
import PictureThree from "./src/screens/03Picture/picture.three.screen";
import HomeScreen from "./src/screens/00Home/home.screen";
import Navigation from "./src/Navigation";

export default class App extends Component() {
  render() {
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
