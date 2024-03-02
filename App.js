import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hi User</Text>
      <TextInput
        value={name}
        placeholder={"Please enter your name"}
        onChangeText={(val) => setName(val)}
        style={styles.input}
      />
      <Text>{count}</Text>
      <Button
        color={"red"}
        backgroundColor={"black"}
        title="Increment"
        onPress={() => {
          setCount((prev) => prev + 1);
          Alert.alert("pressed");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    display: "flex",
    backgroundColor: "red",
    color: "red",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxWidth: "90%",
    borderRadius: 70,
  },
});
