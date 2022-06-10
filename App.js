import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/routes/Router.navigation";

export default function App() {
  {
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
