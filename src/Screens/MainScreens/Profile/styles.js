import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const styles = StyleSheet.create({
    topView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: moderateScaleVertical(24),
      paddingTop: moderateScaleVertical(24),
      paddingBottom: moderateScaleVertical(16),
    },
    circleView: {
      width: moderateScale(48),
      height: moderateScale(48),
      borderRadius: moderateScale(50),
      borderWidth: 1,
      borderColor:colors?.grayE3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleText: {
      fontSize: textScale(20),
      fontFamily: fonts.ManropeBold,
      color: colors.darkText,
    },
    userName: {
      fontFamily: fonts.ManropeBold,
      fontSize: textScale(16),
      color: colors.darkText,
    },
    email: {
      fontFamily: fonts.ManropeRegular,
      fontSize: textScale(15),
      color: colors?.grayText,
    },
    uText: {
      fontSize: textScale(20),
      fontFamily: fonts.ManropeBold,
      color: colors.darkText,
    },
  });