import React from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import * as Icon from "@expo/vector-icons";

function FoodItem(props) {
  return (
    <Pressable>
      <View style={styles.foodStyle}>
        <Text style={styles.foodText}>
          {props.text}
          <Icon.AntDesign
            name="delete"
            size={30}
            color="#e33057"
            onPress={props.onDeleteItem.bind(this, props.id)}
          />
        </Text>
      </View>
    </Pressable>
  );
}
// Darstellung eines eingegebenen Textes, inkl. Pressable

export default FoodItem;

const styles = StyleSheet.create({
  foodStyle: {
    margin: 4,
    padding: 8,
    borderRadius: 9,
    backgroundColor: "#5e0acc",
  },
  foodText: {
    color: "white",
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
