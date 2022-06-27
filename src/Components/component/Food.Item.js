import React from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import * as Icon from "@expo/vector-icons";

function FoodItem(props) {
  return (
    <View style={styles.foodStyle}>
      <Text style={styles.foodText}>{props.text}</Text>
      <View style={styles.iconStyle}>
        <Icon.AntDesign
          name="delete"
          size={30}
          color="#e33057"
          onPress={props.onDeleteItem.bind(this, props.id)}
        />
      </View>
    </View>
  );
}
// Darstellung eines eingegebenen Textes, inkl. Pressable

export default FoodItem;

const styles = StyleSheet.create({
  foodStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    borderRadius: 9,
    marginBottom: 3,
    backgroundColor: "#5e0acc",
    alignItems: "center",
  },
  foodText: {
    color: "white",
  },
  iconStyle: {
    alignSelf: "flex-end",
  },
});
