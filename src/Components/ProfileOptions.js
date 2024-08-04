import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';

export default function ProfileOptions({
  title,
  icon,
  rightText,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={icon} />
      <View
        style={[styles?.mainView, {borderBottomWidth: !!rightText ? 0 : 1}]}>
        <Text style={styles.title}>{title}</Text>
        {!!rightText ? (
          <Text style={styles.rightText}>{rightText}</Text>
        ) : (
          <Image source={imagePath.arrowRight} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginLeft: moderateScaleVertical(16),

    paddingVertical: moderateScaleVertical(24),
    borderBlockColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(15),
    color: colors.darkText,
  },
  rightText: {
    fontFamily: fonts.ManropeRegular,
    fontSize: textScale(13),
    color: colors?.grayText,
  },
});
