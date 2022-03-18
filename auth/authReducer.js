import {useReducer} from 'react';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export default function useAuthReducer() {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        console.log(
          'Chaiwa RESTORE_TOKEN was dispatched, userToken:',
          action.token,
        );
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOG_IN':
        console.log('Chaiwa LOG_IN was dispatched');
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'LOG_OUT':
        console.log('Chaiwa LOG_OUT was dispatched');
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  }, initialState);

  console.log('Chaiwa, what is the new state in reducer?', state);
  return [state, dispatch];
}
