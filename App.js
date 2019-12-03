import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';  

import { createAppContainer } from 'react-navigation';
import {View} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import DashboardScreen from './app/screens/dashboard'
import RecordScreen from './app/screens/record'

function createIcon(icon) {
  return ({ tintColor }) => (  
    <View>  
        <Icon style={[{color: tintColor}]} size={25} name={icon}/>  
    </View>)
}

const routeConfigs = {
  Home: {
    screen: RecordScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: createIcon('home'),
    }
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: "Dashboard-1",
      tabBarIcon: createIcon('dashboard'),
    }
  },
};

const navigatorConfig = {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
};

const appNavigator = createMaterialBottomTabNavigator(routeConfigs, navigatorConfig);
const appContainer = createAppContainer(appNavigator);
export default appContainer;
