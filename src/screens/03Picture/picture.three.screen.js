import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import styles from "./picture.three.style";
import theme from "../../resources/Theme/theme";

function HomeScreen() {
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
    >
      <Text>Henlo</Text>
    </View>
  );
}

export default HomeScreen;
