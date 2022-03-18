/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/home';
import LoginScreen from './components/login';
import LogoutScreen from './components/logout';
import {Button} from 'react-native';
import SplashScreen from './components/splashScreen';
import {useAuthContext} from './auth/authProvider';
import {bootstrapAsync} from './auth/authActions';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AuthContext = createContext({});

const Stack = new createNativeStackNavigator();

const App = () => {
  const context = useAuthContext();
  const {state, dispatch} = context;
  console.log('Chaiwa, what is state?', state);

  useEffect(() => {
    bootstrapAsync(dispatch);
  }, [dispatch]);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={context}>
      <SafeAreaProvider>
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
            {state.userToken != null ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={
                    ({navigation, route}) => ({
                      headerRight: props => (
                        <Button
                          onPress={() => dispatch({type: 'LOG_OUT'})}
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
                  component={LoginScreen}
                  options={{title: 'Login'}}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
