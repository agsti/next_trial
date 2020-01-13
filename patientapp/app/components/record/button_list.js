import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';


export default function (props) {
    const { items, onItemClick } = props;

    const buttonStyle = {
        backgroundColor: "#FFFFFF55",
        borderColor: "#FFFFFFFF",
        borderWidth: 4,
        borderRadius: 0,
        marginHorizontal: 10
   
    }

    const textStyle = { color: "white", fontWeight: "600", padding: 5, fontSize: 35,}

    return <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }}>
        {
            items.map((item, i)=>{
                return <TouchableOpacity
                key={i}
                style={buttonStyle}
                onPress={() => {
                    onItemClick(item)
                }}>
                <Text style={textStyle}>{item}</Text>
            </TouchableOpacity>
            })
        }

 

    </View>
}