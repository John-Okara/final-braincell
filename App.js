import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PictureOne from "./src/screens/01Picture/picture.one.screen";
import PictureTwo from "./src/screens/02Picture/picture.two.screen";
import PictureThree from "./src/screens/03Picture/picture.three.screen";
<<<<<<< HEAD
import { Component } from "react/cjs/react.production.min";
import Navigation from "./src/Navigation";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Henlo</Text>
    </View>
  );
}

=======
import HomeScreen from "./src/screens/00Home/home.screen";
import Navigation from "./src/Navigation";

<<<<<<< HEAD
export default function App() {
  {
=======
>>>>>>> 80c7a3ab3d78f1c05bc9154317d3203c64d84d1f
export default class App extends Component() {
  render() {
>>>>>>> 8fb6701b9838aeac8adf2a7e796614b3e193d262
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
