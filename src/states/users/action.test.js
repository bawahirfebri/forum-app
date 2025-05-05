/**
* test scenario for asyncRegisterUser
*
* - asyncRegisterUser thunk
*  - should dispatch action correctly when data fetching success
*  - should dispatch action and call alert correctly when data fetching failed
*/

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const fakeRegisterResponse = {
  'name': 'John Doe',
  'email': 'john@example.com',
  'password': 'passwordtest',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api.register = api._register;

    delete api.register;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.register = () => Promise.resolve(fakeRegisterResponse);
    const dispatch = vi.fn();

    await asyncRegisterUser(fakeRegisterResponse)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.register = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncRegisterUser(fakeRegisterResponse)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});