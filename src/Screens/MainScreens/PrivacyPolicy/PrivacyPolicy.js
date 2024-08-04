import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../Components/WrapperContainer';
import HeaderComp from '../../../Components/HeaderComp';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import {textScale} from '../../../styles/responsiveSize';

export default function PrivacyPolicy() {
  return (
    <WrapperContainer>
      <HeaderComp title="Privacy policy" isBack />
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Text
          style={{
            fontFamily: fonts.ManropeBold,
            fontSize: textScale(16),
            color: colors.darkText,
            lineHeight: 24,
          }}>
          Lorem ipsum dolor sit amet.
        </Text>
        <Text
          style={{
            fontFamily: fonts.ManropeRegular,
            fontSize: textScale(14),
            color: colors.darkText,
            marginTop: 16,
          }}>{`Consectetur adipiscing elit. Nam tristique vehicula nunc, vel commodo leo lobortis id. Vestibulum at elit in tellus bibendum hendrerit ut in eros. In tempor tellus vel libero laoreet hendrerit. Etiam vel ante felis. In elit ante, tristique ac iaculis eu, pretium eget ante. Duis pulvinar eros et ipsum imperdiet mollis. Integer efficitur velit in lacus consectetur posuere. Maecenas pulvinar tortor ac ipsum blandit, a malesuada sapien placerat. In eu porta eros, ac lacinia sapien.\n\nMaecenas condimentum eros sem, et iaculis tellus fringilla vel. Phasellus sem turpis, pulvinar sit amet ultrices nec, dapibus quis purus. In at pulvinar massa. Cras efficitur commodo est consectetur viverra. Curabitur pellentesque felis tempus velit ullamcorper, sed ullamcorper nibh dictum. Sed est mi, malesuada finibus mauris quis, congue pharetra metus. Etiam in nibh et ipsum pharetra accumsan. Suspendisse imperdiet urna vitae ex pharetra iaculis.\n\nCras eu lobortis sapien. Proin ac purus pellentesque, tincidunt urna a, suscipit enim. Aenean ac finibus dolor. Sed volutpat quis libero in sodales. Suspendisse placerat metus sit amet nisi tempus tristique. Suspendisse ac molestie neque. Aenean elementum purus molestie augue rhoncus, venenatis facilisis felis bibendum. Suspendisse potenti. Etiam egestas felis ligula, a laoreet nulla consequat sit amet.`}</Text>
      </ScrollView>
    </WrapperContainer>
  );
}
