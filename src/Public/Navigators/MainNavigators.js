import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../../Screens/Laundry';
import Orders from '../../Screens/Orders';
import DetailLaundry from '../../Screens/DetailLaundry';
import Acount from '../../Screens/Acount';

const Tab = createBottomTabNavigator();

class main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#059e05',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              tabBarLabel: 'Orders',
              tabBarIcon: ({color, size}) => (
                <Icon name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="DetailLaundry"
            component={DetailLaundry}
            options={{
              tabBarLabel: 'Detail',
              tabBarIcon: ({color, size}) => (
                <Icon name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Acount"
            component={Acount}
            options={{
              tabBarLabel: 'My Acount',
              tabBarIcon: ({color, size}) => (
                <Icon name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default main;
