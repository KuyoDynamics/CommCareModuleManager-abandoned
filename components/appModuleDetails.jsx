import React from 'react';
import {View, Text} from 'react-native';
export default function AppModuleDetails({route, navigation}) {
  const {name, id} = route.params;
  console.log('Chaiwa, what is in the routes?', route);
  return (
    <>
      <View>
        <Text>Name: {name}</Text>
        <Text>ID: {id}</Text>
      </View>
    </>
  );
}
