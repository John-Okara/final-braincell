import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import styles from "./picture.two.style";
import theme from "../../resources/Theme/theme";

function PictureTwo() {
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
    >
      <Image
        source={require("../../resources/img/02GlassesSmiley.jpg")}
      ></Image>
    </View>
  );
}

export default PictureTwo;
