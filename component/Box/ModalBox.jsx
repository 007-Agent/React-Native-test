import React, { useState } from "react"; // Добавили useState
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  // Animated,  // Убрали, если не нужен
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function ModalBox({ visible }) {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Добавить пользователя</Text>
        </View>
        <View style={styles.form_content}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Фамилия"
                keyboardType="default"
              />
            )}
            name="Имя"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Имя"
              />
            )}
            name="Фамилия"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="email"
              />
            )}
            name="email"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Телефон"
              />
            )}
            name="телефон"
            rules={{ required: true }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: 200,
    left: 50,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 330,
    height: 330,
    backgroundColor: "rgba(172, 185, 96, 1)",
    borderRadius: 5,
    rowGap: 15,
    columnGap: 10,
  },
  form_content: {
    display: "flex",
    flexDirection: "column",
    columnGap: 5,
    rowGap: 10,
    padding: 5,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 40,
    padding: 5,
    color: "black",
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
