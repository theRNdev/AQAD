import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import {Contact, ContactUs, Dashboard, Home, Profile} from '../Screens';
import imagePath from '../constants/imagePath';
import fonts from '../styles/fonts';
import {textScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import {isAndroid} from '../utils/helperFunctions';
const BottomTab = createBottomTabNavigator();
export default function TabRoutes() {
  const CustomTabTitle = ({title, isFocused}) => (
    <Text
      style={{
        fontSize: textScale(13),
        fontFamily: fonts.ManropeMedium,
        color: isFocused ? colors.theme : colors?.grayText,
      }}>
      {title}
    </Text>
  );
  const CustomTabIcon = ({icon}) => <Image source={icon} />;
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false, // Hide default header
        tabBarStyle: isAndroid
          ? {
              paddingBottom: 10, // Customize the padding here
              paddingTop: 10,
              height: 70, // Adjust height if needed
            }
          : {paddingTop: 10, height: 90},
      })}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabTitle title="Home" isFocused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              icon={focused ? imagePath.homeActive : imagePath.home}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabTitle title="Dashboard" isFocused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              icon={focused ? imagePath.dashboardActive : imagePath.dashbord}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CONTACT}
        component={Contact}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabTitle title="Contact" isFocused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              icon={focused ? imagePath.contactActive : imagePath.contact}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabTitle title="Profile" isFocused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              icon={focused ? imagePath.profileActive : imagePath.profile}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
