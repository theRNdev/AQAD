import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ButtonComp from '../../../Components/ButtonComp';
import HeaderComp from '../../../Components/HeaderComp';
import TextInputComp from '../../../Components/TextInputComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import langConstants from '../../../constants/langConstants';
import { moderateScaleVertical } from '../../../styles/responsiveSize';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import { styles } from './styles';
export default function Contact() {
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setmsg] = useState('');
  const isValidData = () => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
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
    if (!checkValid) return;
    // Here Can implement api for sending request for backend
    setisLoading(true);
    setTimeout(() => {
      setEmail('');
      setFirstName('');
      setLastName('');
      setmsg('');
      setisLoading(false);
      showSuccess(t(langConstants?.THANK_YOU));
    }, 1000);
  };
  return (
    <WrapperContainer isLoading={isLoading}>
      <HeaderComp />
      <ScrollView>
        <View style={{padding: 24}}>
          <Text style={styles.contactForm}>
            {t(langConstants?.CONTACT_FORM)}
          </Text>
          <Text style={styles.descText}>
            {t(langConstants?.PLEASE_ENTER_YOUR_DATA_TO)}
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

            <TextInputComp
              value={email}
              inputTitle={t(langConstants?.EMAIL)}
              placeholder={t(langConstants?.ENTER_EMAIL)}
              onChangeText={setEmail}
            />
            <View style={{}}>
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
          </View>
        </View>
        <View style={styles.btnView}>
          <ButtonComp
            onPress={() => {
              saveUser();
            }}
            btnText={t(langConstants?.SUBMIT)}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
}


