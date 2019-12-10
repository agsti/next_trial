import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


const styles = StyleSheet.create({
    mainContent: {
        flex: 10,
        backgroundColor: "rgb(240,240,240)"
    },
    titleIcon: {
       margin: 10
    },  
    titleText: {
       margin: 5,
       fontWeight: "bold"
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
        paddingBottom: 10 ,
        color: "black",
        textAlign: "justify"
    }
});

const catToIcon= {
    FUNCTIONAL: "comment-medical",
    PHISIO: "running",
    PROGRESS: "route",
    APPOINTMENT: "calendar-day",
    CHAT: "comment-alt",
}

const catToTitle= {
    FUNCTIONAL: "Expected outcome",
    PHISIO: "Phisiotherapy",
    PROGRESS: "Progress",
    APPOINTMENT: "Appointment",
    CHAT: "Chat request",
}




function Item({ item, index, elements }) {
    let {text, cat} = item;
    let itemStyle = styles.item;
    if (index == elements.length -1 ){
        itemStyle = {...styles.item, marginBottom:55}
    }
    return (
        <View style={itemStyle}>
            <View style={{flexDirection:"row", justifyContent: "flex-start", alignItems:"center"}}>
                <Icon style={styles.titleIcon} size={10} name={catToIcon[cat]}/>  
                <Text style={styles.titleText}>{catToTitle[cat]} </Text>
            </View>
            <Text style={styles.itemText}>{text} </Text>
        </View>
    );
}


export default function (props) {
    const elements = [
        {
            text: "You have a request to chat from Joan, click here to chat.",
            cat: "CHAT",
            id: "0"

        },
        {
            text: "Your next appointment will be on the 2nd of November",
            cat: "APPOINTMENT",
            id: "1"

        },
        {
            text: "It has been 3 weeks since your surgery, You should be able to walk comfortably for 30 minutes with little to no pain.",
            cat: "FUNCTIONAL",
            id: "2"

        },
        {
            text: "Your physio is scheduled to start in one hour, Take your pain medication now to give yourself the best chance of a productive session.",
            cat: "PHISIO",
            id: "3"

        },
        {
            text: "Your scar is progressing nicely, click here for time-lapse.",
            cat: "PROGRESS",
            id: "4"

        },
        {
            text: "Your scar is progressing nicely, click here for time-lapse.",
            cat: "PROGRESS",
            id: "5"

        },
        {
            text: "Your scar is progressing nicely, click here for time-lapse.",
            cat: "PROGRESS",
            id: "6"

        },
       

    ];
    return <View style={styles.mainContent}>
        <FlatList
            data={elements}
            renderItem={({ item, index}) => <Item item={item} elements={elements} index={index} />}
            keyExtractor={item => item.id}
        />
    </View>
};