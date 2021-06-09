import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#9999',
            alignItems: 'center',
            justifyContent: 'center',
      },
      container1: {
            //marginLeft:30,
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderBottomWidth: 0,
            borderLeftWidth: 1,
            shadowColor: "#3E4041",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            //alignItems:'center',
            height: '92%',
            width: '92%',
            borderRadius: 20,
            padding: 40,
            marginTop: 30,
            paddingLeft: 22,
            fontSize: 12

      },
      bakcgroundImage: {
            flex: 1,
            width: "100%",
            height: "50%"
      },
      Image: {
            marginBottom: 15,
            alignSelf: 'center',
            width: "25%",
            height: "10%"
      },
      text1: {
            color: 'green'
      },
      text2: {
            color: '#ff0066',
            justifyContent: 'center',
            alignSelf: 'center'
      },

})

export default styles;