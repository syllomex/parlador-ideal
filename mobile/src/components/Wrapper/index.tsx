import React from "react";
import { ScrollViewProps, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../../assets/color";

interface IProps extends ScrollViewProps {
  fixedHeader?: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ fixedHeader, children }) => {
  return (
    <React.Fragment>
      {fixedHeader && fixedHeader}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.background,
    minHeight: "100%",
    paddingHorizontal: "10%",
  },
});

export default Wrapper;
