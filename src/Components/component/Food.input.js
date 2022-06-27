import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function FoodInput(props) {
  const [enteredListText, setEnteredListText] = useState("");
  // Was genau ist dieses const?

  function listInputHandler(enteredText) {
    setEnteredListText(enteredText);
  }
  // Verstehe ich nicht so ganz

  function addList() {
    props.onAddFood(enteredListText);
    setEnteredListText("");
  }
  // Funktion zum hinzufügen eines Textes (warum brauch ich im screen dann noch mal eine?)

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={listInputHandler}
        placeholder="write some stuff"
        value={enteredListText}
      />
      <Button title="Do it" onPress={addList} />
    </View>
  );
}
// Quasi "Hauptfunktion", fügt alles zusammen

export default FoodInput;

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    margin: 9,
    padding: 8,
  },
});
