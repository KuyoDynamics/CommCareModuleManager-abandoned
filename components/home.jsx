import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, ActivityIndicator} from 'react-native';
import {loadApp} from '../data/apps/appActions';
import useAppReducer from '../data/apps/appReducer';

const HomeScreen = ({navigation}) => {
  const [appId, setAppId] = useState('9171fd53513e4637b07ab4956bdd19df');
  const [state, dispacth] = useAppReducer();
  console.log('Chaiwa what is state from useAppReducer?', state);
  useEffect(() => {
    if (appId) {
      loadApp(dispacth, appId);
    }
  }, [appId]);

  return (
    <SafeAreaView>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : null}
      {state.app && !state.app.isLoading ? (
        <Text>{state.app.name ?? 'No App Found'}</Text>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
