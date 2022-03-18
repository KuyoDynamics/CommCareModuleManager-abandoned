import React, {useState, useContext} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../App';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {logIn} = useContext(AuthContext);

  return (
    <>
      <SafeAreaView>
        <Text>Login</Text>
        <TextInput
          placeholder="username"
          id="username"
          name="username"
          onChangeText={setUsername}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          id="password"
          name="password"
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => logIn({username, password})} />
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
