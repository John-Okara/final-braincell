import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PictureOne from "../screens/01Picture/picture.one.screen";
import PictureTwo from "../screens/02Picture/picture.two.screen";
import PictureThree from "../screens/03Picture/picture.three.screen";
import HomeScreen from "../screens/00Home/home.screen";

const Tab = createBottomTabNavigator();

function Navigation() {
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

export default Navigation;
