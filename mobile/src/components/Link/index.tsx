import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "../../assets/color";

const Link: React.FC = ({ children }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: color.link,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});

export default Link;
