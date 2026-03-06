import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/main_icon.png")} style={styles.image} />
      <Text style={styles.text}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите название города"
        placeholderTextColor={"white"}
      />
    </SafeAreaView>
  );
};

const text = {
  fontSize: 30,
  color: "#007acc",
  textAlign: "center",
  marginBottom: 30,
};
const input = {
  width: 300,
  height: 50,
  borderRadius: 20,
  backgroundColor: "#444444",
  color: "#4a4a4a",
  paddingLeft: 30,
  borderWidth: 2,
  borderColor: "#007ecc",
};
const image = { width: 300, height: 300 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text,
  input,
  image,
});

export default Welcome;
