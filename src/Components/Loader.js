import React from 'react';

import Spinner from 'react-native-loading-spinner-overlay';


import {
    StyleSheet
} from 'react-native';
import Theme from '../styles/Theme'

const LoaderOne = (props) => {
    const { style, loader } = props;
    return (
        <Spinner
            visible={loader}
            // textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
            cancelable={true}
            color={Theme.DARK_RED}
            size={'large'}
        />
    )
}
export { LoaderOne }

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#2D96F8'
    },

})
