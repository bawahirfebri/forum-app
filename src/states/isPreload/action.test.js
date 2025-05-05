/**
* test scenario for asyncPreloadProcess
*
* - asyncPreloadProcess thunk
*  - should dispatch action correctly when data fetching success
*  - should dispatch action and call alert correctly when data fetching failed
*/

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncPreloadProcess, isPreloadActionCreator } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../authUser/action';

const fakeAuthUserResponse = {
  'id': 'john_doe',
  'name': 'John Doe',
  'email': 'john@example.com',
  'avatar': 'https://generated-image-url.jpg'
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });
  
  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
  
    delete api.getOwnProfile;
  });
  
  it('should dispatch action correctly when data fetching success', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);
    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(isPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(isPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});