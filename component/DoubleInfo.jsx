import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function DoubleInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Это компонент DoubleInfo</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Возврат назад
      >
        <Text style={styles.backButtonText}>НАЗАД</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#9c5555",
    borderRadius: 5,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default DoubleInfo;
