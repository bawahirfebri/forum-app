import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  IS_PRELOAD: 'IS_PRELOAD',
};

function isPreloadActionCreator(isPreload) {
  return {
    type: ActionType.IS_PRELOAD,
    payload: {
      isPreload,
    }
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(isPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
}


export {
  ActionType,
  isPreloadActionCreator,
  asyncPreloadProcess,
};