## what is react native

React Native is a framework for creating mobile apps using JavaScript and React. It lets developers write code once and deploy it on both iOS and Android platforms, making app development faster and more efficient.

## React Native Components

```
import {View} from "react-native"
```

- View is Like a div In Html, is like a container of other components

```
import {Button} from "react-native"
<Button
    color={"red"}
    backgroundColor={"black"}
    title="Increment"
    onPress={() => {
        setCount((prev) => prev + 1);
        Alert.alert("pressed");
    }}
/>
```

- Button is quite similar to button in html, but has different props
- onPress: function that will be called when the button is clicked

```
import {TextInput} from "react-native"
<TextInput
        value={name}
        placeholder={"Please enter your name"}
        onChangeText={(val) => setName(val)}
        style={styles.input}
      />
```

- TextInput is similar to input in html, also has different props

```
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
```

- A ScrollView in React Native allows you to display and scroll through content that exceeds the screen size vertically
