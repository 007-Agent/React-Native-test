import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function DoubleInfo({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/audiii2355.jpg")} // путь к вашему изображению
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Это компонент DoubleInfo</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Возврат назад
        >
          <Text style={styles.backButtonText}>НАЗАД</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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

  background: {
    flex: 1, // занимает весь экран
    marginTop: 25,
    width: "100%",
    height: "100%",
  },
  text: {
    color: 'white',
    fontSize: 25,
  }
});

export default DoubleInfo;
