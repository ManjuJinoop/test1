import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Theme from '../styles/Theme';

import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import { Icon, icoMoonConfigSet } from '../styles/icons';


function InputIcon(name) {
    return (
        <Icon
            name={name}
            color={Theme.TERITIARY_COLOR}
            size={14}
            config={icoMoonConfigSet}
        />
    )
}


export const CustomButton = (props) => {
    const { 
        onPress,
        title,
        style,
        disabled,
        icon,
        titleStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.largeButtonContainer, style,
            disabled && { borderColor: Theme.GRAY_OPACITY }
            ]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            <View style={styles.Buttonstyle}>
                {Boolean(icon) && InputIcon(icon)}
                <Text style={[styles.largeButtonText, titleStyle,
                disabled && { color: Theme.GRAY_OPACITY }
                ]}>{title}</Text>
            </View>

            


        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    largeButtonContainer: {
        backgroundColor: Theme.WHITE,
        borderWidth: 2,
        height: heightPercentageToDP(6),
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '3%'

    },
    largeButtonText: {
        fontSize: Theme.FONT_SIZE_LARGE,
        color: '#4B4B4B',
        textAlign: "center",
        justifyContent: 'center',
        fontFamily: "Roboto-Bold"
    },
    Buttonstyle: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row'
    }

});
