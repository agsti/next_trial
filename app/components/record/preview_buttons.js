import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export default function (props) {
    const { text } = props;

    const buttonStyle = {
        backgroundColor: "#FFFFFF55",
        borderColor: "#FFFFFFFF",
        borderWidth: 4,
        borderRadius: 0,
        marginHorizontal: 10
   
    }

    const textStyle = { color: "white", fontWeight: "600", padding: 5, fontSize: 35,}

    return <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }}>
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
                props.onItemClick("re-take")
            }}>
            <Text style={textStyle}>Re-take</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
                props.onItemClick("next")
            }}>
            <Text style={textStyle}>NEXT</Text>
        </TouchableOpacity>
    </View>
}