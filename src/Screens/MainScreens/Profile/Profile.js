import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderComp from '../../../Components/HeaderComp';
import ProfileOptions from '../../../Components/ProfileOptions';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import langConstants from '../../../constants/langConstants';
import navigationStrings from '../../../constants/navigationStrings';
import {signOutUser} from '../../../Firebase/FirebaseActions';
import {daleteUserData} from '../../../redux/slices/userDataSlice';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import {styles} from './styles';
import LogoutModal from '../../../Components/LogoutModal';

export default function Profile({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {userData} = useSelector(state => state.userData);
  const [isVisible, setisVisible] = useState(false);
  return (
    <WrapperContainer>
      <HeaderComp />
      <View style={styles.topView}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.circleView}>
            {!!userData?.firstName ? (
              <Text style={styles.circleText}>{`${
                !!userData?.firstName && userData?.firstName[0]?.toUpperCase()
              }${
                !!userData?.lastName && userData?.lastName[0]?.toUpperCase()
              }`}</Text>
            ) : (
              <Text style={styles.uText}>{'U'}</Text>
            )}
          </View>
          <View style={{marginLeft: 16}}>
            <Text style={styles.userName}>
              {userData?.firstName ?? 'User'} {userData?.lastName ?? ''}
            </Text>
            <Text style={styles.email}>{userData?.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate(navigationStrings.EDIT_PROFILE);
          }}>
          <Image source={imagePath.edit} />
        </TouchableOpacity>
      </View>
      <View
        style={{height: moderateScale(8), backgroundColor: colors?.grayBg}}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: moderateScaleVertical(24)}}>
        <ProfileOptions
          title={t(langConstants?.CHANGE_PASSWORD)}
          icon={imagePath.changePass}
        />
        <ProfileOptions
          title={t(langConstants?.SETTING)}
          icon={imagePath.setting}
        />
        <ProfileOptions
          onPress={() => navigation.navigate(navigationStrings.ABOUT_US)}
          title={t(langConstants?.ABOUT_US)}
          icon={imagePath.aboutUs}
        />
        <ProfileOptions
          onPress={() => navigation.navigate(navigationStrings.CONTACT_US)}
          title={t(langConstants?.CONTACT_US)}
          icon={imagePath.contactUs}
        />
        <ProfileOptions
          onPress={() =>
            navigation.navigate(navigationStrings.TERMS_CONDITIONS)
          }
          title={t(langConstants?.TERMS_CONDITIONS)}
          icon={imagePath.termsAndCondition}
        />
        <ProfileOptions
          onPress={() => navigation.navigate(navigationStrings.PRIVACY_POLICY)}
          title={t(langConstants?.PRIVACY_POLICY)}
          icon={imagePath.privacy}
        />
        <ProfileOptions
          onPress={() => {
            setisVisible(true);
          }}
          title={t(langConstants?.LOGOUT)}
          icon={imagePath.logout}
          rightText={t(langConstants?.APP_VERSION)}
        />
      </ScrollView>
      <LogoutModal
        isVisible={isVisible}
        onCancle={() => {
          setisVisible(false);
        }}
        onPress={() => {
          setisVisible(false);
          setTimeout(() => {
            dispatch(daleteUserData());
          signOutUser();
          }, 500);
        }}
      />
    </WrapperContainer>
  );
}
