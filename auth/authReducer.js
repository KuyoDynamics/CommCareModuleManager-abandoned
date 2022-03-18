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
      console.log('Chaiwa RESTORE_TOKEN was dispatched, user:', action.user);
      return {
        ...prevState,
        user: action.user,
        isLoading: false,
      };
    case 'LOG_IN':
      console.log('Chaiwa LOG_IN was dispatched');
      return {
        ...prevState,
        isSignout: false,
        loginFailed: false,
        user: action.user,
      };
    case 'LOG_OUT':
      console.log('Chaiwa LOG_OUT was dispatched');
      return {
        ...prevState,
        isSignout: true,
        user: null,
        loginFailed: false,
      };
    case 'LOGIN_FAILED':
      console.log('Chaiwa LOGIN_FAILED was dispatched');
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
  console.log('Chaiwa, is useAuthReducer called?');
  return useReducer(reducer, initialState);
}
