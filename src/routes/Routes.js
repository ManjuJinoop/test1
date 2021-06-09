import React, { useState } from 'react';
import BeforeLogin from './BeforeLogin';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";

const BeforeLoginScreensStack = createStackNavigator();
const BeforeLoginScreens = () => {
    return (
        <BeforeLoginScreensStack.Navigator>
            <BeforeLoginScreensStack.Screen
                name="BeforeLoginScreens"
                component={BeforeLogin}
                options={(props) => ({
                    header: () => null,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                })}
            />
        </BeforeLoginScreensStack.Navigator>
    )
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 100000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

function AuthenticationFlows({ }) {


    return (
        <NavigationContainer>
            <BeforeLoginScreens />
            <FlashMessage />
        </NavigationContainer>
    )
}


export default function Routes({ }) {


    let [fontsLoaded] = useFonts({
        'IcoMoon': require('../../assets/fonts/icomoon/icomoon.ttf'),
        'Roboto-Thin': require('../../assets/fonts/Roboto/Roboto-Thin.ttf'),
        'Roboto-Light': require('../../assets/fonts/Roboto/Roboto-Light.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
        'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Black': require('../../assets/fonts/Roboto/Roboto-Black.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <AuthenticationFlows />
        )
    }

}
