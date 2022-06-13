import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styles from "./picture.three.style";
import theme from "../../resources/Theme/theme";
import InputStuff from "../../Components/component/dummy.input";
import Item from "../../Components/component/dummy.list";

const DataFoodlist = [
  {
    id: 1,
    title: "Penne Arrabiatta",
  },
  {
    id: 2,
    title: "Mapo-Tofu",
  },
  {
    id: 3,
    title: "Tonkotsu Ramen",
  },
  {
    id: 4,
    title: "Maultaschen",
  },
  {
    id: 5,
    title: "Curry Reis",
  },
  {
    id: 6,
    title: "Tortellini",
  },
  {
    id: 7,
    title: "Tempura",
  },
  {
    id: 8,
    title: "Boglonese",
  },
];
function PictureThree() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <>
      <InputStuff />

      <FlatList
        data={DataFoodlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View
        style={[styles.mainContainer, { backgroundColor: theme.WHITE_COLOR }]}
      ></View>
    </>
  );
}

export default PictureThree;
