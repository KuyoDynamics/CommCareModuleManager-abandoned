import useAuthReducer from './authReducer';

export function useAuthContext() {
  const [state, dispatch] = useAuthReducer();
  return {
    logIn: async data => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `SecureStore`
      // In the example, we'll use a dummy token

      dispatch({type: 'LOG_IN', token: 'dummy-auth-token'});
    },
    logOut: () => dispatch({type: 'LOG_OUT'}),
    state,
    dispatch,
  };
}
