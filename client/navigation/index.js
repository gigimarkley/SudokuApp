import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, ScrollView, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SCREEN1, SCREEN2, COMPONENT1 } from "../navigation/constants";
import cIndex from "../components";
const { component1 } = cIndex;
import sIndex from "../screens";
const { screen1, screen2 } = sIndex;

import styles from "../styles";

const Stack = createNativeStackNavigator();

const topHeaderLogo = () => {
  return (
    <View>
      <Text style={styles.fontExtraLarge}> Sudoku Helper App </Text>
    </View>
  );
};

const Checker = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN1}
      screenOptions={{
        headerStyle: { backgroundColor: "#006080" },
        headerTitle: topHeaderLogo,
        headerBackTitleVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name={SCREEN1} component={screen1} />
    </Stack.Navigator>
  );
};

const Solver = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN2}
      screenOptions={{
        headerStyle: { backgroundColor: "#006080" },
        headerTitle: topHeaderLogo,
        headerBackTitleVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name={SCREEN2} component={screen2} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Checker") {
            iconName = focused
              ? "checkmark-circle"
              : "checkmark-circle-outline";
          } else {
            iconName = focused ? "bulb" : "bulb";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { backgroundColor: "#006080" },
      })}
    >
      <Tab.Screen name="Checker" component={Checker} />
      <Tab.Screen name="Solver" component={Solver} />
    </Tab.Navigator>
  );
};
