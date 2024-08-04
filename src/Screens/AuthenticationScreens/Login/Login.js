import auth from '@react-native-firebase/auth';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import ButtonComp from '../../../Components/ButtonComp';
import HeaderComp from '../../../Components/HeaderComp';
import TextInputComp from '../../../Components/TextInputComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import langConstants from '../../../constants/langConstants';
import navigationStrings from '../../../constants/navigationStrings';
import { SignIn } from '../../../Firebase/FirebaseActions';
import { saveUserData } from '../../../redux/slices/userDataSlice';
import { craeteDB, getUserById } from '../../../SQLite/SQLiteDB';
import { moderateScaleVertical } from '../../../styles/responsiveSize';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import styles from './styles';
export default function Login({navigation}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isSecure, setisSecure] = useState(true);
  const {t} = useTranslation();
  useEffect(() => {
    craeteDB();
  }, [isFocused]);
  const isValidData = () => {
    let obj = {
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
  const onLogin = async () => {
    const checkValidate = isValidData();
    if (!checkValidate) return;
    try {
      setIsLoading(true);
      let res = await SignIn(email, password);
      const currentUser = auth().currentUser;
      getUserById(currentUser?.uid, (error, user) => {
        if (error) {
          showError(error);
        } else {
          dispatch(saveUserData(user));
        }
      });
      setIsLoading(false);
      showSuccess(res);
    } catch (error) {
      setIsLoading(false);
      showError(error);
    }
  };
  return (
    <WrapperContainer isLoading={isLoading} style={{marginHorizontal: 0}}>
      <HeaderComp />
      <KeyboardAwareScrollView
        contentContainerStyle={{padding: moderateScaleVertical(24)}}>
        <Text style={styles.welcomeTo}>{t(langConstants?.WELCOME_TO)}</Text>
        <Text style={styles.aqadText}>{t(langConstants?.AQAD)}</Text>
        <Text style={styles.enterYourText}>
          {t(langConstants?.ENTER_YOUR_REGISTERED_EMAIL)}
        </Text>
        <View style={{marginTop: 32}}>
          <TextInputComp
            value={email}
            inputTitle={t(langConstants?.EMAIL)}
            placeholder={t(langConstants?.ENTER_EMAIL)}
            onChangeText={setEmail}
          />
          <TextInputComp
            value={password}
            inputTitle={t(langConstants?.PASSWORD)}
            placeholder={t(langConstants?.PASSWORD)}
            rightImage={isSecure ? imagePath?.closeEye : imagePath.eye}
            onPressRight={() => {
              setisSecure(!isSecure);
            }}
            secureText={isSecure}
            onChangeText={setPassword}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={{paddingHorizontal: moderateScaleVertical(24)}}>
        <ButtonComp onPress={() => onLogin()} btnText="Login" />
        <View style={styles.doYouHave}>
          <Text style={styles.doYouHaveText}>
            {t(langConstants?.DONT_HAVE_AN_ACCOUNT)}
          </Text>
          <Text
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_UP);
            }}
            style={styles.signUpText}>
            {' '}
            {t(langConstants?.SIGN_UP)}
          </Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
