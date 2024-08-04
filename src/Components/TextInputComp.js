import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

const TextInputComp = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  textStyle,
  secureText,
  onPressRight,
  rightImage,
  style,
  rightText = '',
  rightTextStyle,
  inputTitle='',
  maxLength=1000,
  isRequired=true,
  ...props
}) => {
  return (
    <View>
      {inputTitle && <Text
        style={{
          fontFamily:fonts.ManropeMedium,
          fontSize: textScale(15),
          marginBottom: moderateScaleVertical(8),
          marginLeft: 4,
          color:colors?.grayText,
        }}>
        {inputTitle}
        {isRequired && <Text style={{color:'#DC1917'}}>*</Text>}
      </Text>}
      <View
        style={{
          ...styles.inputStyle,
          ...style,
        }}>
        <TextInput
          style={{...styles.textStyle, ...textStyle}}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureText}
          maxLength={maxLength}
          // placeholderTextColor={colors.black}
          {...props}
        />
        {!!rightImage && (
          <TouchableOpacity onPress={onPressRight}>
            <Image source={rightImage} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderRadius: moderateScale(12),
    height: moderateScale(56),
    marginBottom: moderateScaleVertical(16),
    paddingRight:moderateScaleVertical(10),
    overflow: 'hidden',
    borderWidth:1,
    borderColor:colors.grayE9
  },
  textStyle: {
    flex: 1,
    paddingHorizontal: moderateScaleVertical(16),
    fontFamily:fonts.ManropeMedium,
    fontSize:textScale(15),
  },
  rightTextStyle: {
    color: colors.brownishGray,
  },
  placeholderTextColor: {
    color: colors.black,
  },
});

export default TextInputComp;
