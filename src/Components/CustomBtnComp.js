//import liraries
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { UIActivityIndicator } from "react-native-indicators";
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const CustomBtnComp = ({
    onPress = () => { },
    btnText = '',
    btnTextStyle = {},
    btnStyle = {},
    loader,
    loaderColor= colors.theme,
    activeOpacity= 0.8,
    disable,
    isImageShow=false
}) => {
    return (
        <TouchableOpacity
            style={{ 
                ...styles.btnStyle, 
                backgroundColor: disable? colors.blackOpacity40 : colors.blueColor,
                ...btnStyle,
             }}
            hitSlop={hitSlopProp}
            activeOpacity={activeOpacity}
            onPress={onPress}
            disabled={disable}
        >
            {loader ? <UIActivityIndicator size={35} color={loaderColor}/>
                :
                <View style={{flexDirection:'row',}}>
                    {isImageShow?<Image source={imagePath?.downloadResport} style={{width:16,height:16,marginTop:4,tintColor:colors.white,marginRight:5}}/>:null}
                <Text style={{...styles.btnTextStyle, ...btnTextStyle, }}
                >{btnText}</Text>
                </View>
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(10),
        backgroundColor: colors.blueColor
    },
    btnTextStyle: {
        ...commonStyles.fontSemiBold18,
        color: colors.white
    },
});

//make this component available to the app
export default CustomBtnComp;
