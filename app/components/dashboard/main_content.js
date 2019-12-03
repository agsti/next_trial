import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const style = StyleSheet.create({
    mainContent: {
        flex: 5,
        backgroundColor: "pink"
    },
    status: {
        backgroundColor: "white"
    }
});

export default function (props) {
    const elements = [
        {
            type: "TEXT",
            text: "Your wound is healing correctly"
        },
        {
            type: "",
            text: "Your phisiotherapy is right on track"
        },

    ];
    return <View style={style.mainContent}>
        {
            elements.map((ele,index) => <Text style={style.status} key={index}>{ele.text}</Text>)
        }
    </View>
};