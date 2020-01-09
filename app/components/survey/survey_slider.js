import React from 'react'
import { Slider } from 'react-native'
import { View, Text} from 'react-native'

export default function (props) {
    return <View>
        <Text style={{marginLeft:7, marginBottom:15, fontWeight:"400"}}>{props.value}{props.definition? `: ${props.definition}`:""}</Text>
        <Slider
            style={{ width: 250, height: 40 }}
            minimumValue={props.min_value || 0}
            maximumValue={props.max_value}
            minimumTrackTintColor="#AFAFAF"
            maximumTrackTintColor="#000000"
            onValueChange={props.onValueChange}
            value={props.value}
            step={1}
        />
    </View>
}