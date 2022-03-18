import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LogoutScreen({navigation}) {
  return (
    <>
      <SafeAreaView>
        <Text>Are you sure?</Text>
      </SafeAreaView>
    </>
  );
}
