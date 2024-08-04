import {StyleSheet} from 'react-native';
import fonts from '../../../styles/fonts';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  descText: {
    fontFamily: fonts.ManropeRegular,
    fontSize: textScale(15),
    marginVertical: moderateScale(16),
    color: colors.darkText,
    textAlign: 'center',
  },
  copyRight: {
    fontFamily: fonts.ManropeRegular,
    marginLeft: moderateScaleVertical(16),
    fontSize: textScale(13),
    color: colors?.grayText,
  },
  appVersion: {
    fontFamily: fonts.ManropeRegular,
    fontSize: textScale(16),
    color: colors?.grayText,
    marginTop: -moderateScaleVertical(24),
  },
  mainView: {
    paddingHorizontal: moderateScaleVertical(24),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8,
  },
});
