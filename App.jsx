import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./component/HomeScreen";
import InfoScreen from "./component/InfoScreen";
import Search from "./component/Search";
import NewScreen from "./component/NewScreen";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Info") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#832d2dff",
          elevation: 5,
          shadowOpacity: 0.2,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 2 },
        },
        tabBarShowLabel: false,
        headerTintColor: "#6b1616ff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerLeft: () => (
          <Ionicons
            name="home"
            size={22}
            color="red"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.navigate("Home")}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="search"
            size={22}
            color="#14191fff"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate("Search")}
          />
        ),
        tabBarStyle: {
          backgroundColor: "#f8f9fa", // Светло-серый фон
          height: 50, // Высота вкладок
          elevation: 3, // Тень для Android
          shadowOpacity: 0.1, // Тень для iOS
          shadowRadius: 2,
          shadowOffset: { width: 0, height: -1 },
          borderTopWidth: 1,
          borderTopColor: "#e9ecef",
        },
        tabBarActiveTintColor: "#28a745", // Цвет активной вкладки (синий)
        tabBarInactiveTintColor: "#495057", // Цвет неактивной вкладки (серый)
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#007bff", // Цвет индикатора под активной вкладкой
          height: 0,
        },
        // Анимации (плавные переходы)
        tabBarPressColor: "#e3f2fd", // Цвет при нажатии
        tabBarPressOpacity: 0.5,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Скрываем header для вкладок, если не нужен
        />

        <Stack.Screen
          name="NewScreen"
          component={NewScreen}
          options={({ navigation }) => ({
            title: "Назад", // Изменение названия (замени на нужное, например "Главная страница")
            headerTitleStyle: {
              color: "blue", // Цвет текста заголовка
              fontSize: 20, // Размер шрифта
              fontWeight: "bold", // Жирность
              fontFamily: "Arial", // Шрифт (убедись, что он загружен в проекте)
            },
            headerStyle: {
              backgroundColor: "lightgray", // Фон header'а
              elevation: 5, // Тень для Android
              shadowOpacity: 0.2, // Тень для iOS
            },
            headerTintColor: "white",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Tabs", { screen: "Home" })} // Переход на Home в TabNavigator
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="home" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
});
