import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, SafeAreaView,
          TouchableOpacity,StyleSheet,ImageBackground,
          Image,FlatList, TouchableHighlight } from 'react-native';

import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import logo from '../assets/RAlogo.jpeg'; 
import {SocialIcon} from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';


export function HomeScreen({ navigation }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound());
    }
  }, []);

   const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        { uri: audio.uri },
        { shouldPlay: true }
      );
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }

    // It will pause our audio
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      setIsPlaying(false);
      return setPlaybackStatus(status);
    }

    // It will resume our audio
    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
  };

  const _handleOpenWithWebBrowser = (url,type) => {
    if(type=='alert'){
      alert(url);
    }else{
      WebBrowser.openBrowserAsync(url);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',width: '100%' }}>
      <View style={{ flex: 1.4, padding: 10, margin:1, width: '100%' }}>
        <ImageBackground source={logo} style={styles.image}></ImageBackground>
      </View>   
      <View style={{ flex: 0.3, padding: 10,width: '100%',alignItems: 'center' }}>
      <TouchableOpacity>
      <Ionicons
          style={{
            alignSelf: 'center',
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 35,
          }}
          name={isPlaying ? 'pause' : 'play'}
          size={20}
          color='white'
          onPress={handleAudioPlayPause}
        />
      </TouchableOpacity> 
      <Text
          style={{
            fontSize: 12,
            textAlign: 'justify',
            margin:10,
            marginTop: 5,
          }}>Bhagalpur</Text>
      </View>
      <View 
          style={{ 
            flex: .7, 
            alignItems: 'center', 
            padding: 10 }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'justify',
            margin:10
          }}>
          Radio Active 90.4 MHz is Bhagalpur's first FM Radio Station, operated under parent organization "LOKHIT". Launched in 2011, the station is a platform for different communities to converge/ unite, share ideas, encourage creative expressions, raise issues (civic and social rights), promote local talent, local business, foster local traditions, sensitize on issues of importance
        </Text>
      </View>
      <View 
           style={{ 
             flex: 0.5, 
             alignItems: 'center', 
             padding: 1 }}>
        <TouchableHighlight onPress={()=>{}}>
          <View style={{flexDirection: 'row'}}>
            <FlatList
                numColumns={5}
                data={socials}
                renderItem={({ item }) => (
                  <View style={{flexDirection: 'column'}}>
                    <SocialIcon style={{height: 35, width:35}}
                      type={item.title}
                      onPress={()=>{_handleOpenWithWebBrowser(item.url,item.type)}}
                    />
                  </View>
                )}
              />
          </View>
        </TouchableHighlight>
      </View>
      <View 
           style={{  
             alignItems: 'center', 
             padding: 1 }}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            http://www.radioactivebhagalpur.com
        </Text>
      </View>
    </View>
  );
}
const socials = [
    { id: '1', title: 'twitter', url: 'https://twitter.com/radioactivebgp'},
    { id: '2', title: 'instagram', url: 'https://www.instagram.com/90.4fmradioactiveofficial/'},
    { id: '3', title: 'facebook', url: 'https://www.facebook.com/90.4fmradioactiveofficial'},
    { id: '4', title: 'youtube', url: 'https://www.youtube.com/channel/UCcBQJb5Wi6EJrT58DG542Bw'},
    { id: '5', title: 'whatsapp', url: 'Please whatsApp to +917549889911',type:'alert'}

];

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

const audio = {
  filename: 'Radio Active 94.0 FM',
  uri:
    'http://109.169.14.36:21337/live.mp3',
};