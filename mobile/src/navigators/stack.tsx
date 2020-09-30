import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Posts from "../screens/Posts";
import NewPost from "../screens/NewPost";
import EditPost from "../screens/EditPost";
import { useProfile } from "../contexts/profile";

const Stack = createStackNavigator();

export const StackNavigator: React.FC = () => {
  const { profile } = useProfile();

  if (profile)
    return (
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditPost"
          component={EditPost}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  else
    return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
};
