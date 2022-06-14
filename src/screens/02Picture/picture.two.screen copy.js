import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  onChangeText,
  View,
  ScrollView,
  FlatList,
} from "react-native";

const InputStuff = () => {
  const [enteredListText, setEnteredListText] = React.useState("");
  const [foodList, setFoodList] = useState([]);

  function listInputHandler(enteredText) {
    setEnteredListText(enteredText);
  }

  function addList() {
    setFoodList((currentFoodList) => [...currentFoodList, enteredListText]);
  }

  return (
    <View style={styles.cartContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={listInputHandler}
          placeholder="write some stuff"
        />
        <Button title="Do it" onPress={addList} />
      </View>
      <View>
        <FlatList
          data={foodList}
          renderItem={(itemData) => {
            return (
              <View style={styles.foodStyle}>
                <Text style={styles.foodText}>{itemData.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    margin: 8,
    padding: 8,
  },
  foodStyle: {
    flex: 3,
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  foodText: {
    color: "white",
  },
});

export default InputStuff;
