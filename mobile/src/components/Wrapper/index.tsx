import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../../assets/color";

const Wrapper: React.FC = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.background,
        minHeight: "100%",
        paddingHorizontal: "10%",
      }}
    >
      {children}
    </ScrollView>
  );
};

export default Wrapper;
