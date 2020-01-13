import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/common/button'
// import VoiceToText from 2components/record/voice_to_text'

export default function (props) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ borderRadius: 20, padding: 10, fontSize: 50, fontWeight: "600" }}>Welcome</Text>
        <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}>Thanks for using PatientChat</Text>
        <Text style={{ paddingHorizontal: 30, paddingVertical: 10, fontWeight: "400", textAlign: "justify" }}>With PatientChat, you will be able to have a casual conversation with people who are or have been through the same procedure as you.</Text>
        <Text style={{ paddingHorizontal: 30, paddingVertical: 20, fontWeight: "400", textAlign: "justify" }}>
            <Text style={{ fontWeight: "bold" }}>PatientChat does not replace a doctor</Text>
            <Text>, if you think you have to see a doctor, please contact your tusted doctor</Text>
        </Text>
        {/* <VoiceToText /> */}
        <Button
            title="Next"
            onPress={() => props.navigation.navigate('onboarding2')}
        />
    </View>
}