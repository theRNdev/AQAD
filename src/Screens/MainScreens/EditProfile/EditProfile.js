import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComp from '../../../Components/ButtonComp';
import HeaderComp from '../../../Components/HeaderComp';
import PhoneNumberInput from '../../../Components/PhoneNumberInput';
import TextInputComp from '../../../Components/TextInputComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import langConstants from '../../../constants/langConstants';
import { saveUserData } from '../../../redux/slices/userDataSlice';
import { getUserById, updateUser } from '../../../SQLite/SQLiteDB';
import {
  moderateScaleVertical
} from '../../../styles/responsiveSize';
import { showError } from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import { styles } from './styles';
export default function EditProfile({navigation}) {
  const {t} = useTranslation();
  const {userData} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(userData?.email);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [countryCode, setcountryCode] = useState('+91');
  const [cca2, setcca2] = useState('IN');
  const countryChange = ({callingCode, cca2}) => {
    setcca2(cca2);
    setcountryCode(`+${callingCode[0]}`);
  };
  useEffect(() => {
    getUserById(userData?.uid, (error, user) => {
      if (error) {
      } else {
        setFirstName(user?.firstName);
        setLastName(user?.lastName);
        setPhoneNumber(user?.phoneNumber);
        setEmail(user.email);
      }
    });
  }, []);

  const isValidData = () => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
    };

    const error = validator(obj);
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const onUpdateProfile = () => {
    let checkValid=isValidData()
    if(!checkValid) return
    if (!!userData.firstName) {
      updateUser(
        firstName,
        lastName,
        phoneNumber,
        userData?.uid,
        navigation,
        (error, success) => {
          if (error) {
            console.log('Error:', error);
          } else {
            getUserById(userData?.uid, (error, user) => {
              if (error) {
                console.log('Error:', error);
              } else {
                if (user) {
                  dispatch(saveUserData(user));
                }
              }
            });
          }
        },
      );
    }
  };

  return (
    <WrapperContainer>
      <HeaderComp isBack title={t(langConstants?.EDIT_PROFILE)} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 24}}>
        <View style={styles.circleView}>
          <Text style={styles.circleText}>
            {!!userData?.firstName
              ? `${userData?.firstName[0]?.toUpperCase()}${userData?.lastName[0]?.toUpperCase()}`
              : 'U'}
          </Text>
        </View>
        <View style={{marginTop: moderateScaleVertical(32)}}>
          <TextInputComp
            value={firstName}
            inputTitle={t(langConstants?.FIRST_NAME)}
            placeholder={t(langConstants.ENTER_FIRST_NAME)}
            onChangeText={setFirstName}
          />
          <TextInputComp
            value={lastName}
            inputTitle={t(langConstants.LAST_NAME)}
            placeholder={t(langConstants.ENTER_LAST_NAME)}
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
          <View pointerEvents="none">
            <TextInputComp
              value={email}
              inputTitle={t(langConstants?.EMAIL)}
              placeholder={t(langConstants.ENTER_EMAIL)}
            />
          </View>
        </View>
        <View style={styles.btnView}>
        <ButtonComp
          onPress={() => {
            onUpdateProfile();
            
          }}
          btnText={t(langConstants?.UPDATE)}
        />
      </View>
      </KeyboardAwareScrollView>
      
    </WrapperContainer>
  );
}

