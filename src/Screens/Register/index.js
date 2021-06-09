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
import axios from 'axios';
import { LoaderOne } from '../../Components/Loader';

function Register({ navigation }) {
  const mycredentials = { Name: '', Email: '',Phone: '',userName:'',Password: '',ConfirmPassword: '' }

  const [credentials, setcredentials] = useState(mycredentials);
  const [Error, setError] = useState(mycredentials);

  useEffect(() => {
    setcredentials(mycredentials)
    setError(mycredentials)
  }, []);

  const validation = () => {
    let NameError     = Validate('Name', 'isEmpty', credentials.Name)
    let EmailError    = Validate('Email', 'email', credentials.Email)
    let PhoneError    = Validate('Phone', 'mobile', credentials.Phone)
    let userNameError = Validate('Username', 'name', credentials.userName)
    let PasswordError = Validate('Password', 'password', credentials.Password)
    let ConfirmPasswordError = Validate('ConfirmPassword', 'isEmpty', credentials.ConfirmPassword)

    setError({
      ...Error,
      Name    : NameError,
      Email   : EmailError,
      Phone   : PhoneError ,
      userName: userNameError,
      Password: PasswordError,
      ConfirmPassword: ConfirmPasswordError

    })

    if (NameError!= ''&& EmailError != '' && PhoneError!= '' && userNameError != '' && PasswordError != ''&& ConfirmPasswordError!= '') {
      return false
    } else {
      return true
    }
  }

  const [Loader, setLoader] = useState(false);

  const Login = async () => {
    const res = await axios.post(
      'http://165.232.159.152:5002/Register-user',
      { name:credentials.Name ,email: credentials.Email,username:credentials.Username,mobile:credentials.Phone, password1: credentials.Password , password2: credentials.ConfirmPassword},
    ).catch((res) => {
      console.log(res)
      setLoader(false)
      showMessage({
        message: "Unauthorized.",
        type   : "default",
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
          message: "User created succesfully",
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
          Password: 'User name already exist.',
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
        (credentials.Name            != '' && Error.Name == '') &&
        (credentials.Email           != '' && Error.Email == '') &&
        (credentials.Phone           != '' && Error.Phone == '') &&
        (credentials.userName        != '' && Error.userName == '') &&
        (credentials.Password        != '' && Error.Password == '') &&
        (credentials.ConfirmPassword != '' && Error.ConfirmPassword == '') 

      ) {
        setLoader(true);
        Login()
      }
    } else {
      setLoader(false)

      showMessage({
        message: "Registration failed! validate details.",
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
                placeholderText='Name'
                value={credentials.Name}
                errorMessage={Error.Name}
                onChangeText={(name) => {
                  setcredentials({ ...credentials, Name: name })
                  setError({
                    ...Error, Name: Validate('Name', 'isEmpty', name)
                  })
                }}

              />
              <CustomInput
                inputStyle={{}}
                icon={'email'}
                placeholderText='Email'
                value={credentials.Email}
                errorMessage={Error.Email}
                onChangeText={(email) => {
                  setcredentials({ ...credentials, Email: email })
                  setError({
                    ...Error, Email: Validate('Email', 'email', email)
                  })
                }}
              />
              <CustomInput
                keyboardType={'numeric'}
                icon={'phone'}
                placeholderText='Phone'
                value={credentials.Phone}
                errorMessage={Error.Phone}
                onChangeText={(mobile) => {
                  setcredentials({ ...credentials, Phone: mobile })
                  setError({
                    ...Error, Phone: Validate('Phone', 'phone', mobile)
                  })
                }}
                
              />
              <CustomInput
                inputStyle={{}}
                icon={'user'}
                placeholderText='Username'
                value={credentials.userName}
                errorMessage={Error.userName}
                onChangeText={(username) => {
                  setcredentials({ ...credentials, userName: username })
                  setError({
                    ...Error, userName: Validate('Username', 'mobile', username)
                  })
                }}
              />
              <CustomInput
                icon={'eye'}
                placeholderText='Password'
                value={credentials.Password}
                errorMessage={Error.Password}
                onChangeText={(password1) => {
                  setcredentials({ ...credentials, Password: password1 })
                  setError({
                    ...Error, Password: Validate('Password', 'password', password1)
                  })
                }}
              />
              <CustomInput
                icon={'eye-blocked'}
                placeholderText='Confirm Password'
                secureTextEntry={true}
                value={credentials.ConfirmPassword}
                errorMessage={Error.ConfirmPassword}
                onChangeText={(password2) => {
                  setcredentials({ ...credentials, ConfirmPassword: password2 })
                  setError({
                    ...Error, Password: Validate('ConfirmPassword', 'isEmpty', password2)
                  })
                }}
              />
              <CustomButton
                onPress={() => OnSubmit()}
                style={{ width: '105%', borderColor: 'green', backgroundColor: 'green' }}
                titleStyle={{ color: 'white' }}
                title=' Register' />
              <Text></Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text>Already have an account?</Text>
                <TouchableOpacity>
                  <Text style={styles.text1} onPress={() => navigation.navigate('Login')}>  Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
}
export default Register;










































