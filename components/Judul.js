import React from 'react';
import {Text} from 'react-native';
 class Judul extends React.Component{
    render(){
        return (
            <Text style={salon.model}
            >{this.props.title}</Text>
         )
    }
}
 const salon = {
    model:{
        color: '#fff',
        fontSize: 50,
        backgroundColor: '#000',
        textAlign: 'center'
    }
}
 export default Judul;
