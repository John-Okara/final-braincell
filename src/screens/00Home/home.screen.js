import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import styles from "./home.style";
import theme from "../../resources/Theme/theme";

function HomeScreen() {
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
    >
      <Text>Henloooo</Text>
    </View>
  );
}

export default HomeScreen;
