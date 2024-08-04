import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import langConstants from '../constants/langConstants';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {
    moderateScale,
    moderateScaleVertical,
    textScale,
} from '../styles/responsiveSize';
export default function PhoneNumberInput({
  cca2,
  countryPickerVisible,
  countryChange,
  setCountryPickerVisible,
  countryCode,
  inputTitle,
  isRequired = true,
  onChangeText = () => {},
  value,
}) {
  const {t} = useTranslation();
  return (
    <View>
      {inputTitle && (
        <Text style={styles.inputTitle}>
          {inputTitle}
          {isRequired && <Text style={{color: colors?.red}}>*</Text>}
        </Text>
      )}
      <View style={styles.innerView}>
        <TouchableOpacity
        disabled={true}
          activeOpacity={0.8}
          onPress={() => setCountryPickerVisible(true)}
          style={styles.flagView}>
          <CountryPicker
            cca2={cca2}
            visible={countryPickerVisible}
            countryCode={cca2}
            withFlag={true}
            withFilter
            onClose={() => setCountryPickerVisible(false)}
            onSelect={countryChange}
          />
          <Text style={styles?.countryText}>{countryCode}</Text>
          <Image source={imagePath.downArrow} />
        </TouchableOpacity>
        <TextInput
          value={value}
          placeholder={t(langConstants?.ENTER_NUMBER)}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          maxLength={10}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputTitle: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(15),
    marginBottom: moderateScaleVertical(8),
    marginLeft: 4,
    color: colors?.grayText,
  },
  innerView: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScaleVertical(16),
    height: moderateScale(56),
    borderRadius: moderateScale(12),
    borderColor: colors.grayE9,
  },
  flagView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    borderRightWidth: 1,
    height: moderateScale(56),
    borderRightColor: colors.grayE9,
  },
  countryText: {
    fontFamily: fonts.ManropeMedium,
    marginRight: 8,
    color: colors.darkText,
  },
  input: {
    paddingLeft: moderateScaleVertical(16),
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(15),
    color: colors.darkText,
    flex:1
  },
});
