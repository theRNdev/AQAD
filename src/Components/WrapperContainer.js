import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import colors from "../styles/colors";
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize";
import Loader from "./Loader";

const WrapperContainer = ({
  children,
  isLoading,
  statusBarColor = colors.white,
  barStyle = "dark-content",
  style,
  outerStyles,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white, ...outerStyles }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={{ ...styles.container, ...style }}>
        {children}
      </SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  headerStyle: {
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24),
  },
});

export default WrapperContainer;
