import React, {useState, useContext} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../App';
import Toast from '../utils/toast';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {logIn, state} = useContext(AuthContext);

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
        <Toast
          visible={state.loginFailed}
          message="Login Failed. Please check your credentials and try again!"
        />
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
