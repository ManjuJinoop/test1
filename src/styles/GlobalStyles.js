import { StyleSheet } from 'react-native';
import Theme from '../styles/Theme';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    //  before Login common styles
    container: {
        flex: 1,
        backgroundColor: Theme.WHITE,
    },
    image: {
        width: '100%',
        height: Theme.SCREEN_HEIGHT / 3
    },
    commonWrapper: {
        // display: 'flex',
        flexGrow: 1,
        // justifyContent: 'space-between',
        // paddingBottom: '10%',
        marginBottom: '10%',
    },

    formContainer: {
        width: '100%',
        paddingHorizontal: '10%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: heightPercentageToDP(2),
        alignContent: 'center',
        marginTop: heightPercentageToDP(1),
        justifyContent: 'center',
        flex: 1

    },
    headingText: {
        color: Theme.TERITIARY_COLOR,
        fontSize: Theme.FONT_BIG,
        fontFamily: "Roboto-Bold",
        textAlign: 'center',
        width: '100%',
        // marginBottom: heightPercentageToDP(5)

    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: '10%',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        marginBottom: '5%',
        // paddingTop: heightPercentageToDP(3)
    },
    bottomItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',
        paddingHorizontal: '10%',
        paddingTop: heightPercentageToDP(1)
    },
    nmText: {
        fontFamily: "Roboto-Bold",
        color: Theme.DARK_GRAY,
        fontSize: Theme.FONT_SIZE_LARGE
    },
    bottomText: {
        color: Theme.BLUE,
        fontFamily: "Roboto-Bold",
        fontSize: Theme.FONT_SIZE_LARGE,
    },


});
