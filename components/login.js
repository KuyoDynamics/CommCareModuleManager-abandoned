import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const LoginSceen = ({navigation}) => {
  return (
    <>
      <View>
        <Text>Login</Text>
        <TextInput placeholder="username" id="username" name="username" />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          id="password"
          name="password"
        />
        <Button>Login</Button>
      </View>
    </>
  );
};

export default LoginSceen;
