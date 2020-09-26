import React from "react";
import { StatusBar as statusBar, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { StackNavigator } from "./src/navigators/stack";

import "moment/locale/pt-br";

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) return null;

  const statusBarHeight = Platform.OS === "ios" ? 20 : statusBar.currentHeight;

  return (
    <React.Fragment>
      <View style={{ height: statusBarHeight }} />

      <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" backgroundColor="#fefefe" />
      </NavigationContainer>
    </React.Fragment>
  );
}
