import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Button from '../../components/common/button'

export default function (props) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Are you about to have surgery?</Text>
        <View style={{ flexDirection: "row" }}>
            <Button
                title="No"
                onPress={() => props.navigation.navigate('onboarding3_not_having')}
            />

            <Button
                title="Yes"
                onPress={() => props.navigation.navigate('onboarding3_having')}
            />
        </View>
    </View>

}