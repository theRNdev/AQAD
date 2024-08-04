import { StyleSheet } from 'react-native';
import { moderateScaleVertical, textScale } from '../../../styles/responsiveSize';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  doYouHave:{
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
  marginVertical: moderateScaleVertical(16),
},
doYouHaveText:{
  fontFamily: fonts.ManropeRegular,
  color: colors.darkText,
  fontSize: textScale(15),
},
signUpText:{
  fontFamily: fonts.ManropeBold,
  color: colors.theme,
  fontSize: textScale(15),
},
enterYourText:{
  fontFamily: fonts.ManropeRegular,
  color: colors.darkText,
  fontSize: textScale(15),
},aqadText:{
  fontFamily: fonts.ManropeExtraBold,
  fontSize: textScale(28),
  color: colors.green,
},
welcomeTo:{
  fontFamily: fonts.ManropeRegular,
  color: colors.darkText,
  fontSize: textScale(15),
}
});
export default styles;
