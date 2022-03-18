import {getApp} from '../../api/api';

export async function loadApp(dispatch, appId) {
  dispatch({type: 'LOADING_APP', appId});
  try {
    const app = await getApp(appId);
    // const app = await response.json();
    dispatch({type: 'APP_LOADED', app});
  } catch (error) {
    console.log('error loading app', error);
    dispatch({type: 'APP_LOAD_FAILED', error});
  }
}
