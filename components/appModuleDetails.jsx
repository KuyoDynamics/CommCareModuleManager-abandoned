import React from 'react';
import {View, Text} from 'react-native';
export default function AppModuleDetails({route, navigation}) {
  const {name, id} = route.params;

  return (
    <>
      <View>
        <Text>Name: {name}</Text>
        <Text>ID: {id}</Text>
      </View>
    </>
  );
}
