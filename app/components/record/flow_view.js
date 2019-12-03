import React, { useState } from 'react'
import { Text,  TouchableOpacity } from 'react-native';

const styleSheet = {
    button: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },

    buttonText: {
        fontSize: 26,
        color: 'white',
    }
}

export default function (props) {

    const { flow, step_index } = props;

    const interaction_text = flow[step_index].q;
    return <TouchableOpacity
        style={styleSheet.button}
        >
        <Text style={styleSheet.buttonText}> {interaction_text}</Text>
    </TouchableOpacity>;
}