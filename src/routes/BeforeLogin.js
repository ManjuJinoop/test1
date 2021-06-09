import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
const BeforeLoginCreator = createStackNavigator();
function BeforeLoginStack() {
    return (
        <BeforeLoginCreator.Navigator
            initialRouteName="Login" >

            <BeforeLoginCreator.Screen name="Login" component={Login}
                options={{
                    header: () => null,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />

            <BeforeLoginCreator.Screen name="Register" component={Register}
                options={{
                    header: () => null,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />
        </BeforeLoginCreator.Navigator>
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



export default function BeforeLogin() {
    return (

        <BeforeLoginStack />

    )
}




