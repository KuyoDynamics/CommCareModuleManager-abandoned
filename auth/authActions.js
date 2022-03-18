import * as SecureStore from 'expo-secure-store';
// Fetch the token from storage then navigate to our appropriate place
export async function bootstrapAsync(dispatch) {
  // Fetch the token from storage then navigate to our appropriate place
  let userToken;

  try {
    userToken = await SecureStore.getItemAsync('userToken');
  } catch (e) {
    // Restoring token failed
  }

  // After restoring token, we may need to validate it in production apps

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  return dispatch({type: 'RESTORE_TOKEN', token: userToken});
}

export async function logIn(data, dispatch) {
  // In a production app, we need to send some data (usually username, password) to server and get a token
  // We will also need to handle errors if sign in failed
  // After getting token, we need to persist the token using `SecureStore`
  // In the example, we'll use a dummy token

  dispatch({type: 'LOG_IN', token: 'dummy-auth-token'});
}

export async function logOut(dispatch) {
  dispatch({type: 'LOG_OUT'});
}
