import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import {loadApp} from '../data/apps/appActions';
import useAppReducer from '../data/apps/appReducer';
import AppStructure from './appStructure';

const HomeScreen = ({navigation}) => {
  const [appId, setAppId] = useState('9171fd53513e4637b07ab4956bdd19df');
  const [state, dispacth] = useAppReducer();

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
      {!state.isLoading && (
        <AppStructure app={state.app} navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
