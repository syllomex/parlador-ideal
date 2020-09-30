import React from "react";
import { Text, TextProps } from "react-native";
import { color } from "../../assets/color";

const ResponseError: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text style={{ color: color.danger, marginTop: 12 }} {...props}>
      {children}
    </Text>
  );
};

export default ResponseError;
