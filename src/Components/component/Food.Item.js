import { StyleSheet, View, Text, Pressable } from "react-native";

function FoodItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.foodStyle}>
        <Text style={styles.foodText}>{props.text}</Text>
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
});
