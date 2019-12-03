import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        zIndex: 2,
        backgroundColor: "#6c5ce7"
    },

    sides: {
        flexDirection: "row",
        // backgroundColor: "cyan"
    },
    sidesText: {
        padding: 10,
        height: 40,
        width: 40,
        fontSize: 16,
        borderRadius: 20,
        marginHorizontal: 3,
        marginVertical: 10,
        color: "#6c5ce7",
        backgroundColor: "white",
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        height: 110,
        borderRadius: 90,
        borderColor: "#6c5ce7",
        borderWidth: 11,
        alignSelf: "baseline",
        backgroundColor: "white",

    },
    centerText: {
        padding: 5,
        fontSize: 60,
        textAlign: "center",
        color: "#6c5ce7",
        fontWeight: "bold"
    }
});



export default function (props) {
    const n = 3;
    return <View style={styles.container}>
        <View style={styles.sides}>
            {
                [...Array(n).keys()].map(i =>
                    <Text style={styles.sidesText} key={i}>{i}</Text>
                )
            }
        </View>

        <View style={styles.center}>
            <Text style={styles.centerText}>
                {n}
            </Text>
        </View>

        <View style={styles.sides}>
            {
                [...Array(n).keys()].map(i =>
                    <Text style={styles.sidesText} key={i}>{i + n}</Text>
                )
            }
        </View>
    </View>
}