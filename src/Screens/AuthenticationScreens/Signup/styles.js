import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import { moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";

export const styles = StyleSheet.create({
    createText: {
      fontFamily: fonts.ManropeExtraBold,
      fontSize: textScale(28),
      color: colors.green,
    },
    PleaseEnterText:{
      fontFamily: fonts.ManropeRegular,
      color: colors.darkText,
      fontSize: textScale(15),
    },
    bottomView:{
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: moderateScaleVertical(16),
    },
    alreadyText:{
      fontFamily: fonts.ManropeRegular,
      color: colors.darkText,
      fontSize: textScale(15),
    },
    loginText:{
      fontFamily: fonts.ManropeBold,
      color: colors.theme,
      fontSize: textScale(15),
    }
  });
  