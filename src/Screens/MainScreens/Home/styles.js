import { StyleSheet } from 'react-native';
import fonts from '../../../styles/fonts';
import { moderateScale, textScale } from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
    greetingText: {
        fontFamily: fonts.ManropeExtraBold,
        fontSize: textScale(28),
        color: colors.green,
        textAlign: 'center',
        marginTop: moderateScale(24),
      },
      mainView: {justifyContent: 'center', alignItems: 'center'},
      welcomText: {
        fontFamily: fonts.ManropeExtraBold,
        color: '#1F244B',
        fontSize: textScale(28),
        marginTop: -16,
      },
      welcomeToText: {
        fontFamily: fonts.ManropeRegular,
        fontSize: textScale(15),
        color: colors?.grayText,
        textAlign: 'center',
      },
});
export default styles