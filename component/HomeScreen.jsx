import React from "react";
import { View, Text, Button } from "react-native";
import NewScreen from "./NewScreen";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Добро пожаловать на главную страницу!</Text>
      {/* Здесь можно добавить больше контента, например, кнопки или изображения */}
      <Button
        title="Go to New Screen"
        onPress={() => navigation.navigate("NewScreen")}
      />
    </View>
  );
}

export default HomeScreen;
