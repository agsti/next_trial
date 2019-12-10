import React from 'react'
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

import TopBar from '../components/dashboard/status_bar'
import MainContent from '../components/dashboard/main_content'

export default class DashboardScreen extends React.Component {


    styleSheet = StyleSheet.create({
        container:{ 
            marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
            flex:1 ,
            backgroundColor: "pink" 
        },
        bottomBar :{
            flex: 1,
            backgroundColor : "blue"
        },
    });



    render(props) {
        return <View style={this.styleSheet.container}>
            <View style={this.styleSheet.bottomBar}>

            <MainContent />
            
            <TopBar />

            </View>
        </View>
    }
}