import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './pages/home';
import Intro from './pages/intro';
import Splash from './pages/splash';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();


function App(): JSX.Element {
  return (

<NavigationContainer>
 <Stack.Navigator
screenOptions={{
                      tabBarShowLabel: false,
                      tabBarStyle: {
                        display: 'flex',
                      },
                      headerStyle: {
                        backgroundColor: '#460F07',
                      },
                      headerTintColor: 'white',
                      headerTitleAlign: 'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white',
                      },

                    }}>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false,}} />
      <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false,}} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>

);
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
     justifyContent: 'center',
      alignItems:'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',

  },
  btn:{
  backgroundColor: 'white',
  },
  sectionDescription: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 55,
    fontSize: 18,
    fontWeight: '400',
  color: 'black'

  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
