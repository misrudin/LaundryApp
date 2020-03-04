import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Laundry from '../../Screens/Laundry';
import Orders from '../../Screens/Orders';
import DetailLaundry from '../../Screens/DetailLaundry';
import Acount from '../../Screens/Acount';
import MyLaundry from '../../Screens/MyLaundry';
import Splash from '../../Screens/Splash';
import Login from '../../Screens/Login';
import Register from '../../Screens/Register';
import Filter from '../../Screens/Filter';
import DaftarLaundry from '../../Screens/DaftarLaundry';
import {createStackNavigator} from '@react-navigation/stack';
import EditLaundry from '../../Screens/EditLaundry';
import EditHarga from '../../Screens/EditHarga';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const user = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      tabBarOptions={{
        activeTintColor: '#285bd4',
        keyboardHidesTabBar: 'true',
      }}>
      <Tab.Screen
        name="Home"
        component={Laundry}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={Filter}
        options={{
          tabBarLabel: 'Cari',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
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
        name="Acount"
        component={Acount}
        options={{
          tabBarLabel: 'My Acount',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} solid size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const mitra = () => {
  return (
    <Tab.Navigator
      initialRouteName="MyLaundry"
      backBehavior="none"
      tabBarOptions={{
        activeTintColor: '#285bd4',
        keyboardHidesTabBar: 'true',
      }}>
      <Tab.Screen
        name="MyLaundry"
        component={MyLaundry}
        options={{
          tabBarLabel: 'My Laundry',
          unmountOnBlur: 'true',
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
        name="Acount"
        component={Acount}
        options={{
          tabBarLabel: 'My Acount',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} solid size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Splash" backBehavior="none">
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={user}
        options={{
          tabBarVisible: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Mitra"
        component={mitra}
        options={{
          tabBarVisible: false,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const mainStart = () => {
  return (
    <Tab.Navigator initialRouteName="Auth" backBehavior="none">
      <Tab.Screen
        name="Auth"
        component={AuthNavigator}
        options={{
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

const StartNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={mainStart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailLaundry"
            component={DetailLaundry}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Open"
            component={DaftarLaundry}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditLaundry"
            component={EditLaundry}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditHarga"
            component={EditHarga}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StartNavigator;
