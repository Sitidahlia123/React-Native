import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
 export default class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image
      style={{width:100, height:50}}
      source={require('./1.png')}
      />
      <TextInput
      style={styles.inputBox}
      placeholder="Email atau Nomor Telepon"
      />
      <TextInput style={styles.inputBox}
      placeholder="Password"
      secureTextEntry={true} //sandinya jadi titik-titik
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>
       <TouchableOpacity >
      <Text>Lupa Kata Sandi?</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
 const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width:250,
    fontSize: 13,
    color:'#000000'
  },
   button:{
    width:250,
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80

  },
   buttonText:{
    fontSize: 13,
    color:'#f7f7f7',

  }
})
