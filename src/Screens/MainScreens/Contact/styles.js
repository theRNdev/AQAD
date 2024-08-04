import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  contactForm: {
    fontSize: textScale(28),
    fontFamily: fonts.ManropeExtraBold,
    color: colors.green,
  },
  descText: {
    fontFamily: fonts.ManropeRegular,
    fontSize: textScale(15),
    color: colors.darkText,
  },
  msgText: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(15),
    marginBottom: moderateScaleVertical(8),
    marginLeft: 4,
    color: colors?.grayText,
  },
  msgView: {
    borderWidth: 1,
    height: moderateScale(112),
    borderRadius: moderateScale(12),
    padding: moderateScaleVertical(16),
    borderColor: colors.grayE9,
  },
  btnView: {
    paddingBottom: moderateScale(16),
    marginHorizontal: moderateScaleVertical(24),
    marginTop: moderateScaleVertical(24),
  },
  input: {
    fontFamily: fonts.ManropeMedium,
    fontSize: moderateScaleVertical(15),
    padding: 0,
    color: colors.darkText,
  },
});
