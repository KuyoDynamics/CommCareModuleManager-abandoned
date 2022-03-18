import {encode} from 'base-64';
import * as SecureStore from 'expo-secure-store';

const baseUrl = 'https://www.commcarehq.org/a/mira-rfms/api/v0.5/';

const addAuthHeader = async headers => {
  const token = await SecureStore.getItemAsync('token');
  console.log('Chaiwa, what is the token?', token);
  return {
    ...headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  };
};

const singleSignOn = async ({username, password}) => {
  const formData = new URLSearchParams({username, password});
  return fetch(`${baseUrl}sso/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });
};

const getApp = async appId => {
  const headers = await addAuthHeader({});
  console.log('Chaiwa, what is Headers?', headers);
  const response = await fetch(baseUrl + `application/${appId}`, {
    method: 'GET',
    headers,
  });
  console.log('Chaiwa, what is response from getApp?', response);
  return response.json();
};

export {singleSignOn, getApp};
