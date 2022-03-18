import useAuthReducer from './authReducer';
import {logIn, logOut} from './authActions';

export function useAuthContext() {
  const [state, dispatch] = useAuthReducer();
  return {
    logIn: data => logIn(data, dispatch),
    logOut: () => logOut(dispatch),
    state,
    dispatch,
  };
}
