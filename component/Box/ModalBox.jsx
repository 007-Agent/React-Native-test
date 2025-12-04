import React, { useState } from "react"; // Добавили useState
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal, // Добавили Modal
  // Animated,  // Убрали, если не нужен
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function ModalBox({ visible }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Добавить пользователя</Text>
          
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 400,
    backgroundColor: "rgba(124, 115, 115, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
