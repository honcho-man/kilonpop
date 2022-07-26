import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

import HomeScreen  from '../screens/home';
import TicketsScreen  from '../screens/tickets';
import AccountScreen  from '../screens/account';
import featuredHeaderTitle from './header';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle:{
    backgroundColor:'#222222',
    height: 105,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    elevation: 0
  },
  tabBarItemStyle:{
    backgroundColor:'transparent',
    marginBottom: 25,
    marginTop: 10,
    color: '#fff',
  },
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "#8A8A8A", 
},
  sceneContainerStyle = {
    backgroundColor: '#030303',
  };
  
var homelabelOptions = {
  tabBarLabelStyle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
  },
  tabBarIcon: () => ( <Image source={require('../assets/home.png')} style={{width: 35, height: 35}} /> ),
  headerShown: false//(props) => <featuredHeaderTitle {...props} />
},
ticketlabelOptions = {
  tabBarLabelStyle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
  },
  tabBarIcon: () => ( <Image source={require('../assets/ticket.png')} style={{width: 35, height: 35}} /> )
},
accountlabelOptions = {
  tabBarLabelStyle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
  },
  tabBarIcon: () => ( <Image source={require('../assets/account.png')} style={{width: 35, height: 35}} /> )
}

function BottomNav() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator {...{screenOptions, sceneContainerStyle}}>
      <Tab.Screen name="Featured" component={HomeScreen} options={homelabelOptions} />
      <Tab.Screen name="Tickets" component={TicketsScreen} options={ticketlabelOptions} />
      <Tab.Screen name="Account" component={AccountScreen} options={accountlabelOptions} />
    </Tab.Navigator>
  );
}

export default BottomNav;