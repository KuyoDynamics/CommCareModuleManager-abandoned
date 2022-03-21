import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import {loadApp} from '../data/apps/appActions';
import useAppReducer from '../data/apps/appReducer';
import AppStructure from './appStructure';
import {Skeleton, LinearProgress} from '@react-native-elements/themed';

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
      {state.isLoading && (
        <>
          <LinearProgress color="red" />
        </>
      )}
      {!state.isLoading && (
        <AppStructure app={state.app} navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
