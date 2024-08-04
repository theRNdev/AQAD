import {StyleSheet} from 'react-native';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import {moderateScaleVertical, textScale} from '../../../styles/responsiveSize';

export const styles = StyleSheet.create({
  barView: {
    paddingHorizontal: moderateScaleVertical(24),
    paddingLeft: moderateScaleVertical(16),
    marginTop: moderateScaleVertical(24),
    overflow: 'hidden',
  },
  userText: {
    fontFamily: fonts.ManropeExtraBold,
    fontSize: textScale(15),
    marginBottom: moderateScaleVertical(24),
    color: colors.darkText,
  },
  matrixText: {
    fontFamily: fonts.ManropeExtraBold,
    fontSize: textScale(18),
    color: colors.darkText,
  },
  yLabelStyle: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(12),
    color: colors.darkText,
  },
  xLabelStyle: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(12),
    color: colors.darkText,
  },
  userCount: {
    paddingHorizontal: moderateScaleVertical(24),
    marginTop: moderateScaleVertical(16),
  },
});
