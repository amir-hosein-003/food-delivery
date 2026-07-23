import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});
