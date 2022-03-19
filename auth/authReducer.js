import {useReducer} from 'react';

const initialState = {
  isLoading: true,
  isSignout: false,
  user: null,
  loginFailed: false,
};

function reducer(prevState, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        user: JSON.parse(action.user),
        isLoading: false,
      };
    case 'LOG_IN':
      return {
        ...prevState,
        isSignout: false,
        loginFailed: false,
        user: JSON.parse(action.user),
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        isSignout: true,
        user: null,
        loginFailed: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...prevState,
        loginFailed: true,
        user: null,
      };
    default:
      return prevState;
  }
}

export default function useAuthReducer() {
  return useReducer(reducer, initialState);
}
