import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import styles from "./picture.one.style";
import theme from "../../resources/Theme/theme";

function PictureOne() {
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
    >
      <Image
        source={require("../../resources/img/01GlassesSmiley.jpg")}
      ></Image>
    </View>
  );
}

export default PictureOne;
