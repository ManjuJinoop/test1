import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Theme from '../styles/Theme';
import { Icon, icoMoonConfigSet } from '../styles/icons';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';



export const CustomInput = (props) => {
    const { inputStyle,
        secureTextEntry,
        label,
        icon,
        placeholderText,
        onChangeText,
        value,
        errorMessage,
        keyboardType,
        maxLength,
        editable,
        required } = props;


    function InputIcon(name) {
        return (
            <Icon
                name={name}
                color={'#8D8D8D'}
                size={16}
                config={icoMoonConfigSet}
            />
        )
    }

    return (
        <View style={{ ...inputStyle, marginBottom: heightPercentageToDP(2) }}>


            <View style={[styles.input]}>
                {InputIcon(icon)}
                <Text>    </Text>
                <TextInput style={[editable === false && { backgroundColor: '#f0f0f0' }]}
                    editable={editable}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholderText}
                    onChangeText={onChangeText}
                    value={value}
                    maxLength={maxLength}
                    placeholderTextColor={'#8D8D8D'}

                >

                </TextInput>


            </View>
            {Boolean(errorMessage) ?
                <Text style={styles.error}>{errorMessage}</Text>
                : null}
        </View>
    )
}



const styles = StyleSheet.create({

    error: {
        color: "red",
        fontSize: Theme.FONT_SIZE_SMALL,
        fontFamily: "Roboto-Regular",
        marginTop: heightPercentageToDP(.3),
        marginHorizontal: widthPercentageToDP(5)
    },

    inputContainer: {
        flexDirection: 'row',
        marginBottom: heightPercentageToDP(.5)
    },
    input: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: 'grey',
        borderWidth: 1,
        height: heightPercentageToDP(6),
        width: '105%',
        borderRadius: 30,
        padding: 0,
        paddingLeft: heightPercentageToDP(2),
        fontSize: Theme.FONT_SIZE_SMALL,
        //justifyContent: 'center',
        alignItems: 'center',



    },


})
