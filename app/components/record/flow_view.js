import React from 'react'
import { Text,  View } from 'react-native';

const styleSheet = {
    button: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "#EEEEEE",
        margin: 20,
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 26,
        color: 'black',
    }
}

export default function (props) {

    const { flow, step_index } = props;

    const interaction_text = flow[step_index].q;
    return <View
        style={styleSheet.button}
        >
        <Text style={styleSheet.buttonText}> {interaction_text}</Text>
    </View>;
}