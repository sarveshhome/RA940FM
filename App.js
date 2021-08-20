import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, SafeAreaView,TouchableOpacity,StyleSheet,ImageBackground  } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import logo from './assets/RAlogo.jpeg'; 

// const image = { uri: 'https://docs.expo.dev/static/images/tutorial/splash.png' };

const audio = {
  filename: 'Radio Active 94.0 FM',
  uri:
    'http://109.169.14.36:21337/live.mp3',
};

function HomeScreen({ navigation }) {

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



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('AboutUS')}
        title="Go to AboutUS"
      /> */}
       <View style={{ flex: 1, padding: 4 }}>
       <View style={styles.container}>
    <ImageBackground source={logo} style={styles.image}>      
      
    </ImageBackground>
  </View>   
      <TouchableOpacity>
       <Ionicons
          style={{
            alignSelf: 'center',
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 50,
          }}
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color='white'
          onPress={handleAudioPlayPause}
        />
       </TouchableOpacity>
       </View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'left',
              marginBottom: 5,
            }}>
            Radio Active 90.4 MHz is Bhagalpur's first FM Radio Station, operated under parent organization "LOKHIT". Launched in 2011, the station is a platform for different communities to converge/ unite, share ideas, encourage creative expressions, raise issues (civic and social rights), promote local talent, local business, foster local traditions, sensitize on issues of importance
          </Text>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'left',
              marginBottom: 5,
            }}>
            Coverage: RADIO ACTIVE is the only FM radio station in Bhagalpur. We also won many awards by the MIB in various category. The programmes are produced, presented and broadcast mostly in Hindi language in public interest. Radio Active is aired with completely digital signal from the tapeless studio at 90.4 MHz frequency. Programmes are produced in such a way that we have a wide reach among the listeners. We have more than 8 lakh listeners. Our broadcast coverage is within approx 40 KM radius from Station (part of Banka, Mur Khagaria, Katihar & Godda districts) a adcast time is 24 hrs. daily.
          </Text>           
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            http://www.radioactivebhagalpur.com
        </Text>
      </View>
    </View>
  );
}

function AboutUSScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>        
        <Text
            style={{
              fontSize: 25,
              textAlign: 'left',
              marginBottom: 5,
            }}>
           Radio Active provides the wholesale program to entertain and enrich the lives of its listeners by promoting peace, co-existence, secularism, information, and entertainment. Overall we can say that our vision is to touch lives and spread happiness to the underprivileged on a sustainable basis and to use the Radio Station as a medium to reach this goal.
          </Text>         
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
         
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.radioactivebhagalpur.com
        </Text>
      </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
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
    width: '100%'

  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});