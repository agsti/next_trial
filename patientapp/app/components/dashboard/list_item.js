import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    titleIcon: {
        margin: 10
    },
    item: {
        minHeight: 40,
        padding: 10,
        backgroundColor: "white",
        borderColor: "rgba(0,0,0,0.05)",
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    },
    itemText: {
        width: "100%",
        height: null,
        paddingHorizontal: 10,
        paddingBottom: 10,
        color: "black",
        textAlign: "justify"
    },
    titleText: {
        margin: 5,
        fontWeight: "bold"
    },
});

const catToIcon = {
    FUNCTIONAL: "comment-medical",
    PHISIO: "running",
    PROGRESS: "route",
    APPOINTMENT: "calendar-day",
    CHAT: "comment-alt",
    RECORD: "arrow-alt-circle-right",
}

const catToTitle = {
    FUNCTIONAL: "Expected outcome",
    PHISIO: "Phisiotherapy",
    PROGRESS: "Progress",
    APPOINTMENT: "Appointment",
    CHAT: "Chat request",
    RECORD: "Feedback request",

}

export default function ({ item, index, elements, onPress }) {
    let { text, cat } = item;
    let itemStyle = styles.item;
    if (index == elements.length - 1) {
        itemStyle = { ...styles.item, marginBottom: 55 }
    }
    if (cat == 'CHAT' || cat == "RECORD"){
        itemStyle = {...itemStyle, borderColor: "#AA0000", borderWidth: 0, borderLeftWidth:5}
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={itemStyle}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Icon style={styles.titleIcon} size={10} name={catToIcon[cat]} />
                    <Text style={styles.titleText}>{catToTitle[cat]} </Text>
                </View>
                <Text style={styles.itemText}>{text} </Text>
            </View>
        </TouchableOpacity>
    );
}