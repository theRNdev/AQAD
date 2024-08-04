import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import langConstants from '../../../constants/langConstants';
import { styles } from './styles';

export default function AboutUs() {
  const {t} = useTranslation();
  return (
    <WrapperContainer>
      <HeaderComp isBack title={'About Us'} />
      <View style={styles.mainView}>
        <Image source={imagePath.appLogo} />
        <Text style={styles.appVersion}>{t(langConstants?.APP_VERSION)}</Text>
        <Text
          style={
            styles.descText
          }>{`Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Integer accumsan vehicula odio\nvestibulum facilisis.`}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={imagePath.copyright} />
          <Text style={styles.copyRight}>2023-2024 AQAD</Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
