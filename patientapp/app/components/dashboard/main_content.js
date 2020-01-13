import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import Item from './list_item'

const styles = StyleSheet.create({
    mainContent: {
        flex: 10,
        backgroundColor: "rgb(240,240,240)"
    },
 
});


export default function (props) {
    return <View style={styles.mainContent}>
        <FlatList
            data={props.data}
            renderItem={({ item, index}) => <Item item={item} elements={props.data} index={index} onPress={()=>props.onItemClick(item)}/>}
            keyExtractor={item => item.id}
        />
    </View>
};