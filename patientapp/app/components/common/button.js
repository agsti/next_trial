import React from 'react'
import {TouchableOpacity, Text } from 'react-native'


export default function (props) {
    return <TouchableOpacity style={{ 
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 20,
        backgroundColor: "#FAFAFA",
        borderColor: "#AFAFAF",
        borderWidth: 1,
        borderRadius: 30,
        ...props.style
    }}
        onPress={props.onPress}
    >
        <Text style={{ fontSize: 40, fontWeight: "600", textAlign:"center", ...props.textStyle }}>{props.title}</Text>
    </TouchableOpacity>
}