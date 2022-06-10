import { StyleSheet, Text, View, Button, TextInput } from "react-native-web";

const dummyComponen = () => {
  return (
    <View>
      <View>
        <TextInput placeholder="write some stuff" />
        <Button title="Add this stuff" />
      </View>
      <View>
        <Text>Random stuff</Text>
      </View>
    </View>
  );
};

export default dummyComponen;
