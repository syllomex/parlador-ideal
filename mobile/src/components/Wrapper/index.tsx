import React from "react";
import {
  ScrollView,
  SafeAreaView,
  ScrollViewProps,
  StyleSheet,
} from "react-native";
import { color } from "../../assets/color";

interface IProps extends ScrollViewProps {
  fixedHeader?: React.ReactNode;
  refreshable?: boolean;
}

const Wrapper: React.FC<IProps> = ({
  refreshControl,
  fixedHeader,
  children,
  refreshable,
}) => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.view}>
        {fixedHeader && fixedHeader}

        <ScrollView
          refreshControl={refreshControl}
          contentContainerStyle={[
            styles.scrollView,
            refreshable ? { flex: 1 } : { paddingHorizontal: "10%" },
          ]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: color.background,
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.background,
  },
});

export default Wrapper;
