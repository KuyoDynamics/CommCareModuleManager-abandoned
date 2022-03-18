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
