import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import { getRandomLightColor } from '../utils/helperFunctions';
export default function RenderUserItem({item, onPress = () => {},index}) {
  return (
    <View style={styles.mainCon}>
      <View style={styles.innerCon}>
        <Text
          style={
            styles.userNameCircle
          }>{`${item?.firstName[0]} ${item?.lastName[0]}`}</Text>
      </View>
      <View style={styles.leftNameView}>
        <View style={{flex: 1, paddingVertical: 4}}>
          <Text style={styles.userName}>
            {`${item?.firstName} ${item?.lastName}${index==0?' (YOU)':''}`}
          </Text>
          <Text style={styles.time}>
            {`${moment(item.createdAt)
              .startOf('day')
              .format('DD MMM, YYYY')} at ${moment(item.createdAt).format(
              'hh:mm a',
            )}`}
          </Text>
        </View>
        <TouchableOpacity
            onPress={onPress}
            style={{justifyContent: 'center'}}>
            <Image source={imagePath.trash} />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flexDirection: 'row',
    // height: moderateScale(64),
    marginBottom: 16,
  },
  innerCon: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(50),
    backgroundColor: getRandomLightColor(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameCircle: {
    fontFamily: fonts.ManropeBold,
    fontSize: textScale(20),
    color: colors.white,
  },
  leftNameView: {
    borderBottomWidth: 1,
    borderBlockColor: colors?.grayE3,
    flex: 1,
    flexDirection: 'row',
    marginLeft: moderateScaleVertical(16),
    paddingBottom:moderateScaleVertical(12)
  },
  userName: {
    fontFamily: fonts.ManropeSemiBold,
    fontSize: 15,
    color: colors.darkText,
  },
  time: {
    fontFamily: fonts.ManropeRegular,
    color: colors?.grayText,
    marginTop: 8,
    fontSize: 13,
  },
});
