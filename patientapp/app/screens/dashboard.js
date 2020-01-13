import React from 'react'
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

import Bar from '../components/dashboard/bar'
import MainContent from '../components/dashboard/main_content'

import SampleData from '../data/sample_notis'

export default class DashboardScreen extends React.Component {

    styleSheet = StyleSheet.create({
        container:{ 
            flex:1 ,
            backgroundColor: "pink" 
        },
    });
    constructor(){
        super();
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(item){
        if (item.cat == "RECORD"){
            this.props.navigation.navigate("record")
        } else if (item.cat == "CHAT"){
            this.props.navigation.navigate("chat")
        }
    }

    render() {
        return <View style={this.styleSheet.container}>

            <MainContent onItemClick={this.onItemClick} data={SampleData}/>
            
            <Bar navigation={this.props.navigation}/>

        </View>
    }
}