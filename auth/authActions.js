import {encode} from 'base-64';
import * as SecureStore from 'expo-secure-store';
import {singleSignOn} from '../api/api';
// Fetch the token from storage then navigate to our appropriate place
export async function bootstrapAsync(dispatch) {
  // Fetch the token from storage then navigate to our appropriate place
  let user;

  try {
    user = await SecureStore.getItemAsync('user');
  } catch (e) {
    // Restoring token failed
  }

  // After restoring token, we may need to validate it in production apps

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  return dispatch({type: 'RESTORE_TOKEN', user});
}

export async function logIn({username, password}, dispatch) {
  // In a production app, we need to send some data (usually username, password) to server and get a token
  // We will also need to handle errors if sign in failed
  // After getting token, we need to persist the token using `SecureStore`
  // In the example, we'll use a dummy token
  try {
    const response = await singleSignOn({username, password});
    const userProfile = await response.json();
    await SecureStore.setItemAsync('user', JSON.stringify(userProfile));
    await SecureStore.setItemAsync('token', encode(`${username}:${password}`));
    dispatch({type: 'LOG_IN', user: userProfile});
  } catch (error) {
    dispatch({type: 'LOGIN_FAILED'});
  }
}

export async function logOut(dispatch) {
  await SecureStore.deleteItemAsync('user');
  await SecureStore.deleteItemAsync('token');
  dispatch({type: 'LOG_OUT'});
}
