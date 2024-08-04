import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import TextInputComp from '../../../Components/TextInputComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import {
    moderateScale,
    moderateScaleVertical,
    textScale,
} from '../../../styles/responsiveSize';

import { useTranslation } from 'react-i18next';
import ButtonComp from '../../../Components/ButtonComp';
import PhoneNumberInput from '../../../Components/PhoneNumberInput';
import langConstants from '../../../constants/langConstants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import validator from '../../../utils/validations';
import { showError, showSuccess } from '../../../utils/helperFunctions';
export default function ContactUs() {
  const {t} = useTranslation();
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [countryCode, setcountryCode] = useState('+91');
  const [cca2, setcca2] = useState('IN');
  const [fullName, setfullName] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [msg, setmsg] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSecure, setisSecure] = useState(true);
  const [email, setEmail] = useState('');
  const countryChange = ({callingCode, cca2}) => {
    setcca2(cca2);
    setcountryCode(`+${callingCode[0]}`);
  };
  const isValidData = () => {
    let obj = {
        fullName: fullName,
      phone: phoneNumber,
      email: email,
    };

    const error = validator(obj);
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const saveUser = async () => {
    const checkValid = isValidData();
    if(!checkValid) return
    // Here Can implement api for sending request for backend
    setisLoading(true)
    setTimeout(() => {
        setEmail('')
        setfullName('')
        setPhoneNumber('')
        setmsg('')
        setisLoading(false)
        showSuccess(t(langConstants?.THANK_YOU))
    }, 1000);
  }
  return (
    <WrapperContainer isLoading={isLoading}>
      <HeaderComp title={t(langConstants?.CONTACT_US)} isBack />
      <ScrollView contentContainerStyle={{padding: 24}}>
        <View style={{}}>
          <TextInputComp
          value={fullName}
            inputTitle={t(langConstants?.FULL_NAME)}
            placeholder={t(langConstants?.ENTER_FULL_NAME)}
            onChangeText={setfullName}
          />
          <TextInputComp
          value={email}
            inputTitle={t(langConstants?.EMAIL)}
            placeholder={t(langConstants?.ENTER_EMAIL)}
            onChangeText={setEmail}
          />
          <PhoneNumberInput
           value={phoneNumber}
            inputTitle={t(langConstants?.PHONE_NUMBER)}
            cca2={cca2}
            countryPickerVisible={countryPickerVisible}
            countryChange={countryChange}
            setCountryPickerVisible={setCountryPickerVisible}
            countryCode={countryCode}
            onChangeText={setPhoneNumber}
          />
          <View style={{marginVertical: 16}}>
            <Text style={styles.msgText}>{t(langConstants?.MESSAGE)}</Text>
            <View style={styles.msgView}>
              <TextInput
               value={msg}
                placeholder={t(langConstants?.WRITE_YOUR_MESSAGE)}
                multiline
                style={styles.input}
                onChangeText={setmsg}
              />
            </View>
          </View>
          <Text
            style={{
              fontFamily: fonts.ManropeRegular,
              fontSize: textScale(14),
              color: colors?.grayText,
            }}>
            {t(langConstants?.WE_ALWAYS_TRY)}
          </Text>
        </View>
        <View
        style={{
          marginBottom: moderateScaleVertical(16),
          marginTop:moderateScaleVertical(24)
        }}>
        <ButtonComp onPress={()=>{saveUser()}} btnText={t(langConstants?.SUBMIT)} />
      </View>
      </ScrollView>
    </WrapperContainer>
  );
}
const styles = StyleSheet.create({
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
  input: {
    fontFamily: fonts.ManropeMedium,
    fontSize: textScale(15),
    padding: 0,
    color: colors.darkText,
  },
});
