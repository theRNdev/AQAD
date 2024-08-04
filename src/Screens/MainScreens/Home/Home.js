import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderComp from '../../../Components/HeaderComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import langConstants from '../../../constants/langConstants';
import { moderateScale } from '../../../styles/responsiveSize';
import styles from './styles';

export default function Home() {
  const {t}=useTranslation()
  const {userData} = useSelector(state => state.userData);
  return (
    <WrapperContainer >
      <HeaderComp />
      <Text style={styles?.greetingText}>
        Hey, {userData?.firstName} {userData?.lastName}
      </Text>
      <View style={{marginTop: moderateScale(100)}}>
        <View style={styles.mainView}>
          <Image source={imagePath.welcomeLogo} />
          <Text style={styles.welcomText}>{t(langConstants?.WELCOME_TO_AQAD)}</Text>
          <Text
            style={
              styles.welcomeToText
            }>{t(langConstants?.WELCONME_TO_AQAD)}</Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
