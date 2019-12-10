import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        zIndex: 2,
        backgroundColor: "#6c5ce7",
        height: 60
    },

    descriptionTextContainer: {
        flexDirection: "column",
        // backgroundColor: "cyan"
        marginHorizontal: 3,
        marginVertical: 10,
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
    },
    daysCount: {
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        height: 110,
        borderRadius: 90,
        borderColor: "#6c5ce7",
        borderWidth: 11,

        backgroundColor: "white",

    },
    daysCountText: {
        padding: 5,
        fontSize: 60,
        textAlign: "center",
        color: "#6c5ce7",
        fontWeight: "bold"
    }
});



export default function (props) {
    const n = 23;
    return <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", height: 60 }}>
            <View style={styles.daysCount}>
                <Text style={styles.daysCountText}>
                    {n}
                </Text>
            </View>

            <View style={styles.descriptionTextContainer}>
                <Text style={{...styles.descriptionText,textAlign: "left"}} >
                    Days
                </Text>
                <Text style={{...styles.descriptionText,textAlign: "left"}} >
                    since surgery
                </Text>
            </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", height: 60 }}>
            <Button title="Chat" onPress={()=> props.navigation.navigate('Chat')} />      
        </View>
    </View>
}