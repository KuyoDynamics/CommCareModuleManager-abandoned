import React from 'react';
import {Image} from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50, alignSelf: 'auto'}}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
  );
}
