import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";
function Search() {
  const [users, setUsers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleAllUsers = async () => {
    try {
      const response = await axios.get("http://10.16.1.250:3000/all-users");
      console.log(response.data);
      if (response) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Ошибка при добавлении пользователя:", error.message);
    }
  };
  users.map((elem) => {
    console.log(elem, "elem");
  });
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => setSelectedIndex(index)}
      style={[
        styles.item,
        { backgroundColor: selectedIndex === index ? "yellow" : "#39992cff" },
      ]}
    >
      <Text style={styles.text}>{item.first_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <Text>Третья кнопка. Рассмотрим пример кода!!!</Text>
      {/* Добавьте сюда свою информацию, например, текст, списки или другие компоненты */}
      <TouchableOpacity onPress={handleAllUsers}>
        <Text>Спиоск пользователей</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={users}
          renderItem={renderItem}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 100,
  },
  item: {
    padding: [10, 20, 0, 10],
    paddingTop: 10,
    paddingRight: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingLeft: 20,
    borderBottomColor: "#885454ff",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#39992cff",
  },
  selectedItem: {
    backgroundColor: "#4CAF50", // Зеленый цвет для выбранного
  },
  title: {
    fontSize: 18,
    color: "#333",
  },
  selectedTitle: {
    color: "#fff", // Белый текст для контраста
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Search;
