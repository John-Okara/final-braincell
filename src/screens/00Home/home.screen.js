import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";
// Imports von react und react native

import styles from "./home.style";
import theme from "../../resources/Theme/theme";
// Imports von Dateien aus anderen Unterordnern

function HomeScreen() {
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
    >
      <Text>Henloooo</Text>
    </View>
  );
}
// Funktion zur Darstellung einer Textausgabe

export default HomeScreen;
