import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignIn from "../screens/SignIn";

const Stack = createStackNavigator();

export const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
