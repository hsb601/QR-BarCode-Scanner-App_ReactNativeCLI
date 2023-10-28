import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Icon } from 'react-native-elements';
import React, {useState,useEffect} from 'react';
export default function Intro({navigation}){
return(
   <View style={styles.container}>
   <View>
            <ImageBackground style={styles.cover} source={require('../assets/cover.png')} />
            </View>
<View style={styles.centerizedView}>
          <View style={styles.Box}>
            <Text style={styles.TitleText}>QR & BAR CODE SCANNER/Text>
            <Text style={styles.SubText}>Scan The QR or Bar Code</Text>
            <Text style={styles.SubText}>Get  <Text style={styles.Para}>Link or Code</Text></Text>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')} >
              <Text style={styles.ButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>


);}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  centerizedView: {
    width: '100%',
    height: '100%',

  },
  Box: {
      width: '100%',
      height:'100%',
      backgroundColor: '#fafafa',
      borderRadius: 20,
      marginTop: 300,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
  },
  cover: {
width:360,
height:360,
         alignSelf: 'center',
         display: 'flex-start',
         alignItems: 'center',
         justifyContent: 'center',
          top: -31,
             marginBottom: -370,
           shadowColor: '#000',
             shadowOffset: {
               width: 0,
               height: 1,
             },
             shadowOpacity: 0.2,
             shadowRadius: 1.41,
             elevation: 2,

  },
  TitleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color:'darkorange',
    textAlign: 'center',

    marginTop: 47,
  },
  SubText: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'black',
      textAlign: 'center',
    },
  Button: {
    backgroundColor: 'darkorange',
    marginTop: 50,
    paddingVertical: 10,
    borderRadius: 4,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Para: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color:'darkorange',
  },
});