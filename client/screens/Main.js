import React from "react";
import { TabNavigator } from "../navigation/index";
import { View, Text, ScrollView, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

const Main = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Main;
