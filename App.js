import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const App = () => {
  const [people, setPeople] = useState([
    { name: "oussama", age: 24 },
    { name: "anass", age: 24 },
    { name: "ahlam", age: 24 },
    { name: "naa", age: 24 },
    { name: "oussama", age: 24 },
    { name: "anass", age: 24 },
    { name: "ahlam", age: 24 },
    { name: "naa", age: 24 },
    { name: "oussama", age: 24 },
    { name: "anass", age: 24 },
    { name: "ahlam", age: 24 },
    { name: "naa", age: 24 },
    { name: "oussama", age: 24 },
    { name: "ahlam", age: 24 },
    { name: "naa", age: 24 },
    { name: "oussama", age: 24 },
    { name: "anass", age: 24 },
    { name: "ahlam", age: 24 },
    { name: "naa", age: 24 },
    { name: "oussama", age: 24 },
    // ... rest of the people objects
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {people.map((p, index) => (
          <View key={index} style={styles.listItem}>
            <Text
              style={styles.text}
            >{`sala ${index} - ${p.name} - ${p.age}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 40,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "red",
    marginBottom: 10,
  },
  listItem: {},
});

export default App;
