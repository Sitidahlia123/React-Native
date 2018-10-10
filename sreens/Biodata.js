import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
 class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image
      style={{width:100, height:100}}
      source={require('./1.png')}
      />
      <TextInput
      style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Email"
      palceholderTextColor="#ffffff"
      />
      <TextInput style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Password"
      secureTextEntry={true}
      palceholderTextColor ="#ffffff" //sandinya jadi titik-titik
      />
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
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
    justifyContent: 'center',
    backgroundColor: '#e57373'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:30,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10,
  },
   button:{
     width:300,
     backgroundColor:'#af4448',
     borderRadius:25,
     marginVertical:10,
     paddingVertical:13,
     alignItems: 'center',
     justifyContent:'center',

  },
   buttonText:{
     fontSize: 13,
     color:'#f7f7f7',

  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 8,
  },
})
 class DetailsScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
          <Image
            style={{width:200, height:200}}
            source ={require('./1.png')} />
            <Text style={styles.welcome}>BIODATA!</Text>
            <Text style={styles.instructions}>Nama : Siti Dahlia</Text>
            <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
            <Text style={styles.instructions}>No Absen : 36 </Text>
          </View>
        )}
}

  const RootStack = StackNavigator ({
      Home : HomeScreen,
      Details : DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
 export default class App extends Component{
    render(){
        return <RootStack/>;
    }
}
