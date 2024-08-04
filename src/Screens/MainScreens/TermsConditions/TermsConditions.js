import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../Components/WrapperContainer';
import HeaderComp from '../../../Components/HeaderComp';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import {textScale} from '../../../styles/responsiveSize';

export default function TermsConditions() {
  return (
    <WrapperContainer>
      <HeaderComp title="Terms and conditions" isBack />
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Text
          style={{
            fontFamily: fonts.ManropeBold,
            fontSize: textScale(16),
            color: colors.darkText,
            lineHeight: 24,
          }}>
          Maecenas condimentum eros sem, et iaculis tellus fringilla vel.
        </Text>
        <Text style={{fontFamily:fonts.ManropeRegular,fontSize:textScale(14),color:colors.darkText,marginTop:16}}>{`Pellentesque a imperdiet nisi. Integer semper imperdiet arcu vel molestie. Ut non pellentesque magna. Sed sit amet dolor ac turpis varius viverra ac in arcu. In ut justo fermentum justo finibus tempus. Fusce at pulvinar enim. Proin suscipit nisi imperdiet gravida interdum.\n\nMaecenas condimentum eros sem, et iaculis tellus fringilla vel. Phasellus sem turpis, pulvinar sit amet ultrices nec, dapibus quis purus. In at pulvinar massa. Cras efficitur commodo est consectetur viverra. Curabitur pellentesque felis tempus velit ullamcorper, sed ullamcorper nibh dictum. Sed est mi, malesuada finibus mauris quis, congue pharetra metus. Etiam in nibh et ipsum pharetra accumsan. Suspendisse imperdiet urna vitae ex pharetra iaculis.\n\nCras eu lobortis sapien. Proin ac purus pellentesque, tincidunt urna a, suscipit enim. Aenean ac finibus dolor. Sed volutpat quis libero in sodales. Suspendisse placerat metus sit amet nisi tempus tristique. Suspendisse ac molestie neque. Aenean elementum purus molestie augue rhoncus, venenatis facilisis felis bibendum. Suspendisse potenti. Etiam egestas felis ligula, a laoreet nulla consequat sit amet.`}</Text>
      </ScrollView>
    </WrapperContainer>
  );
}
