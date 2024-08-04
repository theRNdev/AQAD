import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    circleView: {
      width: moderateScale(136),
      height: moderateScale(136),
      borderRadius: moderateScale(100),
      alignSelf: 'center',
      borderColor: colors?.grayE3,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleText: {
      fontFamily: fonts.ManropeBold,
      fontSize: textScale(50),
      color: colors.darkText,
    },
    btnView: {
        marginTop:24,
      marginBottom: moderateScaleVertical(16),
    },
  });
  