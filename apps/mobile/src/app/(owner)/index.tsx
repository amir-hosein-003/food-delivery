import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const OwnerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Owner</Text>
    </View>
  );
};

export default OwnerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});
