import React from 'react'
import {TouchableOpacity, Text } from 'react-native'


export default function (props) {
    return <TouchableOpacity style={{ 
        padding: 10,
        backgroundColor: "#FBFBFB",
        borderColor: "#DFDFDF",
        borderWidth: 1,
        borderRadius: 5,
        ...props.style
    }}
        onPress={props.onPress}
    >
        <Text style={{ fontSize: 20, fontWeight: "600", textAlign:"center", ...props.textStyle }}>{props.title}</Text>
    </TouchableOpacity>
}