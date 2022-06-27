import { useState } from "react";
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

import FoodItem from "../../Components/component/Food.Item";
import FoodInput from "../../Components/component/Food.input";
// Imports von Komponenten, die dann später mit eingebaut werden.

const InputStuff = () => {
  const [foodList, setFoodList] = useState([]);
  //Was genau ist das?

  function addList(enteredListText) {
    setFoodList((currentFoodList) => [
      ...currentFoodList,
      { text: enteredListText, id: Math.random().toString() },
    ]);
  }
  // Funktion zum hinzufügen eines Textes

  function deleteFoodHandler(id) {
    setFoodList((currentFoodList) => {
      return currentFoodList.filter((food) => food.id !== id);
    });
  }
  // Funktion zum löschen des hinzugefügten Textes

  return (
    <View>
      <FoodInput onAddFood={addList} />
      <View style={styles.cartContainer}>
        <FlatList
          data={foodList}
          renderItem={(itemData) => {
            return (
              <FoodItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteFoodHandler}
                key={foodList.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
// Quasi "Hauptfunktion", fügt die anderen Funktionen zusammen

const styles = StyleSheet.create({
  cartContainer: {
    //flex: 1,
    paddingHorizontal: 16,
    padding: 50,
  },
});

export default InputStuff;
