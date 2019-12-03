import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
const styleSheet  = {
    button: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

    buttonText: {
      fontSize: 26, 
      color: 'white',
      
    }
}

export default function(props){
    const {onItemSelected, flows} = props;
    return flows.map((inter, i) =>
        <TouchableOpacity
            style={styleSheet.button}
            key={i}
            onPress={() => {onItemSelected && onItemSelected(i)}}>
            <Text style={styleSheet.buttonText}> {inter.title} </Text>
        </TouchableOpacity>
    );
}