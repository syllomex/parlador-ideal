import React from "react";
import { StyleSheet, Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "../../assets/color";

interface IProps extends TouchableOpacityProps {
  danger?: boolean;
}

const Link: React.FC<IProps> = ({ danger, children, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={[styles.link, { color: danger ? color.danger : color.link }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});

export default Link;
