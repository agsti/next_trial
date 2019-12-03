import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';

import TopBar from '../components/dashboard/top_bar'
import MainContent from '../components/dashboard/main_content'

export default class DashboardScreen extends React.Component {


    styleSheet = StyleSheet.create({
        
        bottomBar :{
            flex: 1,
            backgroundColor : "blue"
        },
    });



    render() {
        return <View style={{ flex:1 , backgroundColor: "pink" }}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <TopBar />

            <MainContent />
            
            <View style={this.styleSheet.bottomBar}>

            </View>
        </View>
    }
}