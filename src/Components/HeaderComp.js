import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';

export default function HeaderComp({title = '', onBackPress, isBack = false}) {
  const navigation=useNavigation()
  return (
    <View style={{}}>
      <View
        style={{
          height: moderateScale(48),
          borderBottomWidth: 1,
          borderBlockColor: colors?.grayE3,
          justifyContent: 'center',
          paddingHorizontal: moderateScaleVertical(24),
        }}>
        {isBack ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={imagePath.backIcon} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: fonts.ManropeBold,
                fontSize: 18,
                color: colors.darkText,
                marginLeft: 16,
              }}>
              {title}
            </Text>
          </View>
        ) : (
          <Image source={imagePath.logo} />
        )}
      </View>
    </View>
  );
}
