import {useReducer} from 'react';

const initialState = {
  isLoading: true,
  app: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case 'LOADING_APP':
      return {
        ...prevState,
        app: null,
        isLoading: true,
      };
    case 'APP_LOADED':
      return {
        ...prevState,
        app: action.app,
        isLoading: false,
      };
    case 'APP_LOAD_FAILED':
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
  return useReducer(reducer, initialState);
}
