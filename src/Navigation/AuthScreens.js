import React from "react";
import {
    Login,
    Signup
} from "../Screens";
import navigationStrings from "../constants/navigationStrings";
export default function (Stack) {
 
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGN_UP}
                component={Signup}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
