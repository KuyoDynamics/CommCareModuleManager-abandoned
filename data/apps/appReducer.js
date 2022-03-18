import {useReducer} from 'react';

const initialState = {
  isLoading: true,
  app: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case 'LOADING_APP':
      console.log('Chaiwa LOADING_APP was dispatched, appId:', action.appId);
      return {
        ...prevState,
        app: null,
        isLoading: true,
      };
    case 'APP_LOADED':
      console.log('Chaiwa APP_LOADED was dispatched');
      return {
        ...prevState,
        app: action.app,
        isLoading: false,
      };
    case 'APP_LOAD_FAILED':
      console.log('Chaiwa APP_LOAD_FAILED was dispatched');
      return {
        ...prevState,
        app: null,
        isLoading: false,
      };
    default:
      return prevState;
  }
}

export default function useAppReducer() {
  console.log('Chaiwa, is useAppReducer called?');
  return useReducer(reducer, initialState);
}
