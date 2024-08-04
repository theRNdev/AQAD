import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import ButtonComp from '../../../Components/ButtonComp';
import TextInputComp from '../../../Components/TextInputComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import langConstants from '../../../constants/langConstants';
import navigationStrings from '../../../constants/navigationStrings';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {
    moderateScaleVertical,
    textScale
} from '../../../styles/responsiveSize';

import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HeaderComp from '../../../Components/HeaderComp';
import PhoneNumberInput from '../../../Components/PhoneNumberInput';
import { createUser } from '../../../Firebase/FirebaseActions';
import { insertData } from '../../../SQLite/SQLiteDB';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import { styles } from './styles';
export default function Signup({navigation}) {
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSecure, setisSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [countryCode, setcountryCode] = useState('+91');
  const [cca2, setcca2] = useState('IN');
  const countryChange = ({callingCode, cca2}) => {
    setcca2(cca2);
    setcountryCode(`+${callingCode[0]}`);
  };

  const isValidData = () => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      email: email,
      password: password,
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
    if (!checkValid) return;
    try {
      setisLoading(true);
      await createUser(email, password);
      const user = auth().currentUser;
      insertData(
        user.uid,
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        (error, success) => {
          if (error) {
            showError(error);
          } else {
            showSuccess(t(langConstants?.YOU_ARE_REGISTERED));
            navigation.navigate(navigationStrings.LOGIN);
          }
        },
      );
      setisLoading(false);
    } catch (error) {
      showError(error);
      setisLoading(false);
    }
  };

  return (
    <WrapperContainer isLoading={isLoading} style={{marginHorizontal: 0}}>
      <HeaderComp />
      <KeyboardAwareScrollView contentContainerStyle={{padding: 24}}>
        <Text style={styles.createText}>
          {t(langConstants?.CREATE_YOUR_ACCOUNT)}
        </Text>
        <Text
          style={styles.PleaseEnterText}>
          {t(langConstants?.PLEASE_ENTER_YOUR_DATA)}
        </Text>
        <View style={{marginTop: moderateScaleVertical(32)}}>
          <TextInputComp
            value={firstName}
            inputTitle={t(langConstants?.FIRST_NAME)}
            placeholder={t(langConstants?.ENTER_FIRST_NAME)}
            onChangeText={setFirstName}
          />
          <TextInputComp
            value={lastName}
            inputTitle={t(langConstants?.LAST_NAME)}
            placeholder={t(langConstants?.ENTER_LAST_NAME)}
            onChangeText={setLastName}
          />
          <View style={{marginBottom: 16}}>
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
          </View>
          <TextInputComp
            value={email}
            onChangeText={setEmail}
            inputTitle={t(langConstants?.EMAIL)}
            placeholder={t(langConstants?.ENTER_EMAIL)}
          />
          <TextInputComp
            value={password}
            onChangeText={setPassword}
            inputTitle={t(langConstants?.PASSWORD)}
            placeholder={t(langConstants?.PASSWORD)}
            rightImage={isSecure ? imagePath?.closeEye : imagePath.eye}
            onPressRight={() => {
              setisSecure(!isSecure);
            }}
            secureText={isSecure}
          />
        </View>
        <Text
          style={{
            fontFamily: fonts.ManropeRegular,
            fontSize: textScale(13),
            color: colors?.darkText,
          }}>
          {t(langConstants?.BY_TAPPING)}{' '}
          <Text style={{color: colors.theme}}>
            {t(langConstants?.TERMS_SERVICES)}
          </Text>{' '}
          and{' '}
          <Text style={{color: colors.theme}}>
            {t(langConstants?.PRIVACY_POLICY)}
          </Text>{' '}
        </Text>
        <View style={{marginTop:24}}>
        <ButtonComp
          onPress={() => saveUser()}
          btnText={t(langConstants.SIGN_UP)}
        />
        <View
          style={styles.bottomView}>
          <Text
            style={styles.alreadyText}>
            {t(langConstants?.ALREADY_HAVE_AN)}
          </Text>
          <Text
            onPress={() => {
              navigation.navigate(navigationStrings.LOGIN);
            }}
            style={styles.loginText}>
            {` ${t(langConstants?.LOGIN)}`}
          </Text>
        </View>
      </View>
      </KeyboardAwareScrollView>
      
    </WrapperContainer>
  );
}
