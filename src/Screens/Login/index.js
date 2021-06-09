import React, { useEffect, useState } from 'react';
import GlobalStyles from '../.././styles/GlobalStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, Text, Image, View, ImageBackground, Touchable, LogBox } from 'react-native';
import { CustomInput } from '../../Components/CustomInput';
import { CustomButton } from '../../Components/CustomButton';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Validate } from '../../Components/validate';
import { showMessage } from "react-native-flash-message";
import axios from 'axios';//api fetch
import { LoaderOne } from '../../Components/Loader';

function Login({ navigation }) {

  const mycredentials = { userName: '', Password: '' }

  const [credentials, setcredentials] = useState(mycredentials);
  const [Error, setError] = useState(mycredentials);

  useEffect(() => {
    setcredentials(mycredentials)
    setError(mycredentials)
  }, []);

  const validation = () => {
    let userNameError = Validate('Username', 'isEmpty', credentials.userName)
    let PasswordError = Validate('Password', 'isEmpty', credentials.Password)

    setError({
      ...Error,
      userName: userNameError,
      Password: PasswordError
    })

    if (userNameError != '' && PasswordError != '') {
      return false
    } else {
      return true
    }
  }

  const [Loader, setLoader] = useState(false);

  const Login = async () => {
    const res = await axios.post(
      'http://165.232.159.152:5002/login-user',
      { email: credentials.userName, password: credentials.Password },
    ).catch((res) => {
      console.log(res)
      setLoader(false)
      showMessage({
        message: "Unauthorized.",
        type: "default",
        floating: true,
        position: 'bottom',
        icon: 'danger',
        backgroundColor: "red",
        color: '#fff',
      });
      return { status: 401, message: 'Unauthorized' }
    })
    if (res.status === 200) {
      setLoader(false)
      console.log(res.status)
      if (res.data.status === true) {
        alert(res.data.Status)
        showMessage({
          message: "You are successfully logged in",
          type: "default",
          floating: true,
          position: 'bottom',
          icon: 'success',
          backgroundColor: "green",
          color: '#fff',
        });
        return true;
      } else {
        setLoader(false)

        setError({
          ...Error,
          Password: 'Invalid Username or Password.',
        })
        showMessage({
          message: res.data.Status,
          type: "default",
          floating: true,
          position: 'bottom',
          icon: 'danger',
          backgroundColor: "red",
          color: '#fff',
        });
        return false;
      }
    }
    else {
      setLoader(false)
      return false;
    }
  }

  const OnSubmit = () => {
    if (validation()) {
      if (
        (credentials.userName != '' && Error.userName == '') &&
        (credentials.Password != '' && Error.Password == '')
      ) {
        setLoader(true);
        Login()
      }
    } else {
      setLoader(false)

      showMessage({
        message: "LogIn failed! Invalid Username or Password.",
        type: "default",
        floating: true,
        position: 'bottom',
        icon: 'danger',
        backgroundColor: "red",
        color: '#fff',
      });
    }

  }
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, }}>
        <View style={styles.container} >
          <ImageBackground source={require('../../../assets/imags/background.jpg')} style={styles.bakcgroundImage}>
            <View style={styles.container1}>
              <Image source={require('../../../assets/imags/logo.jpeg')} style={styles.Image} />
              <LoaderOne loader={Loader} />
              <CustomInput
                inputStyle={{}}
                icon={'user'}
                placeholderText='Username'
                value={credentials.userName}
                errorMessage={Error.userName}
                onChangeText={(username) => {
                  setcredentials({ ...credentials, userName: username })
                  setError({
                    ...Error, userName: Validate('Username', 'isEmpty', username)
                  })
                }}
              />
              <CustomInput
                icon={'eye-blocked'}
                placeholderText='Password'
                secureTextEntry={true}
                value={credentials.Password}
                errorMessage={Error.Password}
                onChangeText={(password) => {
                  setcredentials({ ...credentials, Password: password })
                  setError({
                    ...Error, Password: Validate('Password', 'isEmpty', password)
                  })
                }}
              />
              <CustomButton
                onPress={() => OnSubmit()}
                style={{ width: '105%', borderColor: 'green', backgroundColor: 'green' }}
                titleStyle={{ color: 'white' }}
                title=' Sign In '
              />
              <Text></Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={styles.text1} onPress={() => navigation.navigate('Register')}>  Register</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.text2}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
}
export default Login;
































