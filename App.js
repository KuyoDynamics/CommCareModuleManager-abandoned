/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/home';
import LoginSceen from './components/login';

const Stack = new createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginSceen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'CommCare Module Manager'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
