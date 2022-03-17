import {encode} from 'base-64';

const auth = '';
const baseUrl = '';
const itemId = '';

const getApps = async () => {
  try {
    const response = await fetch(baseUrl + itemId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth,
      },
    });
    return await response.json();
  } catch (error) {
    //   Set global state with error flag
    console.error(error);
  } finally {
    // setIsLoading(false);
    console.log('disable isLoading');
  }
};

export {getApps};
