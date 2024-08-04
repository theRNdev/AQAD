import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';
import fonts from '../styles/fonts';

const ButtonComp = ({
  onPress = () => {},
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
  disabled,
}) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={{...styles.btnStyle,opacity:disabled?0.5:1, backgroundColor: colors?.theme, ...btnStyle}}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        style={{...styles.btnTextStyle, color: colors?.white, ...btnTextStyle}}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.theme,
    height: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(12),
  },
  btnTextStyle: {
    fontFamily:fonts.ManropeBold,
    fontSize:textScale(15),
    color:colors.white
  },
});
export default ButtonComp;
