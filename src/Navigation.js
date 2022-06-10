import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PictureOne from "./screens/01Picture/picture.one.screen";
import PictureTwo from "./screens/02Picture/picture.two.screen";
import PictureThree from "./screens/03Picture/picture.three.screen";
<<<<<<< HEAD
import HomeScreen from "./screens/03Picture/picture.three.screen";

const Tab = createBottomTabNavigator();

export default function App() {
=======
import HomeScreen from "./screens/00Home/home.screen";

const Tab = createBottomTabNavigator();

function Navigation() {
>>>>>>> 80c7a3ab3d78f1c05bc9154317d3203c64d84d1f
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pic 1" component={PictureOne} />
        <Tab.Screen name="Pic 2" component={PictureTwo} />
        <Tab.Screen name="Pic 3" component={PictureThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD
=======

export default Navigation;
>>>>>>> 80c7a3ab3d78f1c05bc9154317d3203c64d84d1f
