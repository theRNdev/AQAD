import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import langConstants from '../constants/langConstants';
import colors from '../styles/colors';
import { default as fontFamily, default as fonts } from '../styles/fonts';
import { moderateScale, textScale } from '../styles/responsiveSize';
import ButtonComp from './ButtonComp';
export default function LogoutModal({
  isVisible,
  onCancle = () => {},
  onPress = () => {},
  isDelete=false
}) {
  const {t}=useTranslation()
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      useNativeDriver={true}
      >
      <View
        style={{
          padding: moderateScale(16),
          paddingVertical: moderateScale(24),
          backgroundColor: colors.white,
          borderRadius: 8,
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts.ManropeExtraBold,
              fontSize: textScale(18),
              color: colors.darkText,
            }}>
            {isDelete?t('Delete'):t(langConstants.LOGOUT)}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fontFamily.ManropeRegular,
              fontSize: textScale(15),
              marginTop: 16,
              color: colors.darkText,
            }}>
            {isDelete?t(langConstants?.ARE_YOU_SURE_WANT_TO_DELETE):t(langConstants?.ARE_YOU_SURE_WANT_TO)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 34,
          }}>
          <ButtonComp
            onPress={onCancle}
            btnStyle={{
              width: '48%',
              height: moderateScale(49),
              borderRadius: moderateScale(9),
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.theme,
            }}
            btnText="Cancel"
            btnTextStyle={{
              color: colors.theme,
              fontSize: moderateScale(14),
            }}
          />
          <ButtonComp
            onPress={onPress}
            btnStyle={{width: '48%', height: 49, borderRadius: 9}}
            btnText={isDelete?t('Delete'):t(langConstants?.LOGOUT)}
            btnTextStyle={{fontSize: 14}}
          />
        </View>
      </View>
    </Modal>
  );
}
