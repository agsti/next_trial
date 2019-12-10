import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Easing, Animated } from 'react-native';

import DashboardScreen from './app/screens/dashboard'
import RecordScreen from './app/screens/record'
import ChatScreen from './app/screens/chat'

import OnboardingScreen1 from './app/screens/welcome/1'
import OnboardingScreen2 from './app/screens/welcome/2'
import OnboardingScreen3_having from './app/screens/welcome/3_having'
import OnboardingScreen3_not_having from './app/screens/welcome/3_not_having'
import Onboarding4 from './app/screens/welcome/4'

function createIcon(icon) {
  return ({ tintColor }) => (
    <View>
      <Icon style={[{ color: tintColor }]} size={25} name={icon} />
    </View>)
}


const stackNavigator = createStackNavigator({
  onboarding1: OnboardingScreen1,
  onboarding2: OnboardingScreen2,
  onboarding3_having: OnboardingScreen3_having,
  onboarding3_not_having: OnboardingScreen3_not_having,
  onboarding4: Onboarding4,
  record: RecordScreen,
  dashboard: DashboardScreen,
  chat: ChatScreen
},
  {
    initialRouteName: 'onboarding1',
    headerMode: "screen",
    transitionConfig : () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
    defaultNavigationOptions: {
      title: "PatientChat",
    }
  });


// const routeConfigs = {
//   Home: {
//     screen: RecordScreen,
//     navigationOptions: {
//       tabBarLabel: "Home",
//       tabBarIcon: createIcon('home'),
//     }
//   },
//   Dashboard: {
//     screen: DashboardScreen,
//     navigationOptions: {
//       tabBarLabel: "Dashboard-1",
//       tabBarIcon: createIcon('dashboard'),
//     }
//   },
//   Hello: {
//     screen: OnboardingStack,
//     navigationOptions: {
//       tabBarLabel: "Welcome",
//       tabBarIcon: createIcon('diff-modified'),
//     }
//   },
//   Chat: {
//     screen: ChatScreen,
//     navigationOptions: {
//       tabBarLabel: "chat",
//       tabBarIcon: createIcon('comment'),
//     }
//   },

// };

const navigatorConfig = {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
};

// const appNavigator = createMaterialBottomTabNavigator(routeConfigs, navigatorConfig);
const appContainer = createAppContainer(stackNavigator);
export default appContainer;
