import React, { useState } from 'react'
import { Text,  TouchableOpacity } from 'react-native';

const styleSheet = {
    button: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        alignSelf: "flex-end"
    },

    buttonText: {
        fontSize: 26,
        color: 'white',
    }
}

export default function (props) {
    const [index, setIndex] = useState(0);

    const { flow, onFlowFinished } = props;

    const interaction_text = flow[index];
    return <TouchableOpacity
        style={styleSheet.button}
        onPress={() => {
            if (index + 1 < flow.length) {
                setIndex(index + 1);
            } else {
                onFlowFinished && onFlowFinished();
            }
        }}>
        <Text style={styleSheet.buttonText}> {interaction_text}</Text>
    </TouchableOpacity>;
}