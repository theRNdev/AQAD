import navigationStrings from '../constants/navigationStrings';
import {AboutUs, ContactUs, EditProfile, PrivacyPolicy, TermsConditions} from '../Screens';
import TabRoutes from './TabRoutes';
export default function (Stack) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.ABOUT_US}
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CONTACT_US}
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.TERMS_CONDITIONS}
        component={TermsConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}
