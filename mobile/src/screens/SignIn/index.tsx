import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { color } from "../../assets/color";

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Bem-vindo ao{" "}
        <Text style={{ color: color.primary }}>Parlador Ideal</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignIn;
