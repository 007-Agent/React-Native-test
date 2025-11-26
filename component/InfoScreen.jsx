import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Это страница с информацией.</Text>
      {/* Добавьте сюда свою информацию, например, текст, списки или другие компоненты */}

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate("DoubleInfo")}
      >
        <Text style={styles.btnText}>Переход</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#9c5555",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
  },
  btnText: {
    color: "red",
    fontSize: 20,
  },
});
export default InfoScreen;
