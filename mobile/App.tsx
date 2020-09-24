import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StackNavigator } from "./src/navigators/stack";

export default function App() {
  const [state, setState] = useState({ appIsReady: false });

  return (
    <React.Fragment>
      <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </React.Fragment>
  );
}
