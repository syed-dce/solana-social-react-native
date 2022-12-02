/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import * as web3 from '@solana/web3.js';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import AddPost from './src/screens/AddPost';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {


  return (

    <View style={styles.mainContainer}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false,
                                        tabBarStyle: { 
                                                        backgroundColor: '#17002b',
                                                        height: '8%',
                                                        margin: 8,
                                                        borderRadius: 15,
                                                        padding: 5
                                                      }
                                        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddPost" component={AddPost} />
      </Tab.Navigator>
    </NavigationContainer>

    </View>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    
  },

});

export default App;
