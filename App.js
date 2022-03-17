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
import LogoutScreen from './components/logout';
import LogoTitle from './components/logoTitle';
import {Button} from 'react-native';
import SplashScreen from './components/splashScreen';

const Stack = new createNativeStackNavigator();

const isSignedIn = false;
const isLoading = false;

const App = () => {
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7393B3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={
                ({navigation, route}) => ({
                  headerRight: props => (
                    <Button
                      onPress={() => navigation.navigate('Logout')}
                      title="Logout"
                      // color="#fff"
                    />
                  ),
                })
                // title: 'CommCare Module Manager',
                // headerTitle: props => <LogoTitle {...props} />,
              }
            />
            <Stack.Screen
              name="Logout"
              component={LogoutScreen}
              options={{title: 'Logout'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginSceen}
              options={{title: 'Login'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
