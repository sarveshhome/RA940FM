import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, SafeAreaView,
          TouchableOpacity,StyleSheet,ImageBackground,
          Image,FlatList, TouchableHighlight } from 'react-native';

import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import logo from './assets/RAlogo.jpeg'; 
import {SocialIcon} from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import {HomeScreen} from './components/Home.js'
import {AboutUSScreen} from './components/About.js'
import { useKeepAwake } from 'expo-keep-awake';

const Drawer = createDrawerNavigator();



export default function App() {
  useKeepAwake();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}
         options={{
          title: 'Radio Active 90.4 FM', //Set Header Title         
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}        
        />
        <Drawer.Screen name="AboutUS" component={AboutUSScreen}
        options={{
          title: 'About us', //Set Header Title         
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    //width: '90%',
    padding: 10

  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});