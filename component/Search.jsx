import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";
function Search() {
  const [users, setUsers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [products, setProducts] = useState([]);

  const handleAllProducts = async () => {
    try {
      const response = await axios.get("http://10.16.1.66:3000/api/all_pgoto");
      setProducts(response.data.data);
      console.log(response.data.data, "fk3k3k3");
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
    }
  };

  const handleAllUsers = async () => {
    try {
      const response = await axios.get("http://10.16.1.66:3000/all-users");
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

  // const renderProducts = ({ item }) => (
  //   <View style={styles.item}>
  //     {/* Фото в формате base64 */}
  //     {item.photo ? (
  //       <Image
  //         source={{ uri: `data:image/jpeg;base64,${item.photo}` }}
  //         style={styles.image}
  //       />
  //     ) : (
  //       <View style={styles.placeholder}>
  //         <Text>No Image</Text>
  //       </View>
  //     )}
  //     <Text style={styles.name}>{item.name}</Text>
  //     <Text>Артикул: {item.article}</Text>
  //     <Text>Цена: {item.price} руб.</Text>
  //   </View>
  // );

  const renderProducts = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.photo_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>Артикул: {item.article}</Text>
      <Text>Цена: ${item.price}</Text>
    </View>
  );

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
    <View style={{ flex: 1, paddingTop: 100, paddingHorizontal: 20 }}>
      {/* Верхняя часть: кнопки в ряд */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={handleAllUsers}>
          <Text>Спиоск пользователей</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAllProducts}>
          <Text>Отображение продуктов</Text>
        </TouchableOpacity>
      </View>

      {/* Ниже: список */}
      <FlatList
        data={users}
        renderItem={renderItem}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={true}
      />
      <FlatList
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Можно добавить другие компоненты ниже при необходимости */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  list: {
    paddingTop: 100,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
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
