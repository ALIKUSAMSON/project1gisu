import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import startscreen from './startscreen';



class NavigationDrawerStructure extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
        </TouchableOpacity>
      </View>
    );
  }
}


const WelcomeScreen = createSwitchNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: startscreen
  },
  });

const HighScoresScreen = createSwitchNavigator({
  //All the screen from the Sceen2 will be indexed here
  Second: {
    screen: startscreen,
  },
});

const SettingScreen = createSwitchNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: startscreen,
    }
});

const AppTabNavigator = createBottomTabNavigator({
  FOOD:WelcomeScreen,
  CLASSES:HighScoresScreen,
  DIET:SettingScreen,},
    {tabBarOptions: {
      initialRouteName: 'startscreen',
      activeTintColor: '#db3e00',
      inactiveTintColor: '#3E2723',
      fontSize:'90',
      style: {
        backgroundColor: '#d9e3f0',
        
     }
  }
},
);

export default createAppContainer(AppTabNavigator);