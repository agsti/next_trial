import React from 'react'
import { TouchableOpacity, Animated, StyleSheet, Easing } from 'react-native';
const recordStyle = {
    backgroundColor: "#FF000055",
}

const pictureStyle = {
    backgroundColor: "#FFFFFF55",
    borderColor: "#FFFFFFFF",
    borderWidh: 1
}

export default class RecordButton extends React.Component {


    constructor() {
        super();
        this.state = { fadeAnim: new Animated.Value(0) };


    }

    render() {
        const { mode, size, onclick} = this.props;

        const buttonStyle = {
            width: size,
            height: size,
            borderRadius: size / 2,
        }

        let finalStyle;
        if (mode == "picture") {
            finalStyle = StyleSheet.flatten([buttonStyle, pictureStyle]);
        } else if (mode == "video") {
            finalStyle = StyleSheet.flatten([buttonStyle, recordStyle]);
        } else if (mode == "recording") {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(this.state.fadeAnim, {
                        toValue: 1,
                        easing: Easing.sin,
                        duration: 700,
                    }),
                    Animated.timing(this.state.fadeAnim, {
                        toValue: 0,
                        easing: Easing.sin,
                        duration: 700,
                    }),
                ])
            ).start();
            finalStyle = StyleSheet.flatten([buttonStyle, recordStyle, {opacity: this.state.fadeAnim }]);
        }


        return <TouchableOpacity
            onPress={onclick}>
            <Animated.View style={finalStyle}>

            </Animated.View>

        </TouchableOpacity>

    }
}