import React from "react";
import { ScrollViewProps, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../../assets/color";

interface IProps extends ScrollViewProps {
  fixedHeader?: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ fixedHeader, children }) => {
  return (
    <React.Fragment>
      {fixedHeader && fixedHeader}
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {children}
        </ScrollView>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: color.background,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.background,
    paddingHorizontal: "10%",
  },
});

export default Wrapper;
