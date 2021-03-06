import * as SecureStore from 'expo-secure-store';

const baseUrl = 'https://www.commcarehq.org/a/mira-rfms/api/v0.5/';

const addAuthHeader = async headers => {
  const token = await SecureStore.getItemAsync('token');

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
  const response = await fetch(baseUrl + `application/${appId}`, {
    method: 'GET',
    headers,
  });

  return response.json();
};

export {singleSignOn, getApp};
