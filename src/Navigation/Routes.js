import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthScreens from './AuthScreens';
import MainScreens from './MainScreens';
const Stack = createStackNavigator();
export default function Routes() {
  const {userData}=useSelector((state)=>state?.userData)
  return (
    <NavigationContainer>
      {!!userData?MainScreens(Stack):AuthScreens(Stack)}
    </NavigationContainer>
  );
}
