import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ModalBox from "./Box/ModalBox";

export default function NewScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>dvioweiweviwe</Text>
      <TouchableOpacity onPress={openModal}>
        <Text>Регистрация</Text>
      </TouchableOpacity>

      {isModalVisible && <ModalBox visible={isModalVisible} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "red",
  },
  text: {
    color: "red",
  },
});
