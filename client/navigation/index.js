import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, ScrollView, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CHECKER, SCREEN2, COMPONENT1, TABLE } from "../navigation/constants";
import cIndex from "../components";
const { component1, Table } = cIndex;
import sIndex from "../screens";
const { Checker, screen2 } = sIndex;

import styles from "../styles";

const Stack = createNativeStackNavigator();

const topHeaderLogo = () => {
  return (
    <View>
      <Text style={styles.fontExtraLarge}> Sudoku Helper App </Text>
    </View>
  );
};

const CheckerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={CHECKER}
      screenOptions={{
        headerStyle: { backgroundColor: "#006080" },
        headerTitle: topHeaderLogo,
        headerBackTitleVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name={CHECKER} component={Checker} />
      <Stack.Screen name={TABLE} component={Table} />
    </Stack.Navigator>
  );
};

const SolverStack = () => {
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
      <Tab.Screen name="Checker" component={CheckerStack} />
      <Tab.Screen name="Solver" component={SolverStack} />
    </Tab.Navigator>
  );
};
