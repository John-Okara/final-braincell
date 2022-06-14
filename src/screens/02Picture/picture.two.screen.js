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
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  foodStyle: {
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
