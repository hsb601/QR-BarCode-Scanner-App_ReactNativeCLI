import React, { useEffect } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView from react-native-webview

const Splash = ({ navigation }) => {
  const localGif = require('../assets/Gif.gif'); // URL of the GIF

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Intro');
    }, 5000);
  }, []);

  return (

   <WebView
    source={localGif} />

  );
};
export default Splash;
