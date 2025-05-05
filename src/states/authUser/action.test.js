/**
* test scenario for asyncSetAuthUser and asyncUnsetAuthUser
*
* - asyncSetAuthUser thunk
*  - should dispatch action correctly when data fetching success
*  - should dispatch action and call alert correctly when data fetching failed
*
* - asyncUnsetAuthUser thunk
*  - should dispatch action correctly when data fetching success
*  - should dispatch action and call alert correctly when data fetching failed
*/

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { asyncSetAuthUser, setAuthUserActionCreator } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const fakeLoginResponse = {
  'name': 'John Doe',
  'email': 'john@example.com',
}

const fakeAuthUserResponse = {
  'id': 'john_doe',
  'name': 'John Doe',
  'email': 'john@example.com',
  'avatar': 'https://generated-image-url.jpg'
};

const fakeTokenResponse = {
  'token': 'token_test'
};

describe('asyncSetAuthUser and asyncUnsetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
    api._putAccessToken = api.putAccessToken;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
    api.putAccessToken = api._putAccessToken;

    delete api.login;
    delete api.getOwnProfile;
    delete api.putAccessToken;
  });

  describe('asyncSetAuthUser thunk', () => {
    it('should dispatch action correctly when data fetching success', async () => {
      api.login = () => Promise.resolve(fakeLoginResponse);
      api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);
      const dispatch = vi.fn();

      await asyncSetAuthUser(fakeLoginResponse)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action and call alert correctly when data fetching failed', async () => {});
  });

  describe('asyncUnsetAuthUser thunk', () => {
    it('should dispatch action correctly when data fetching success', async () => {});

    it('should dispatch action and call alert correctly when data fetching failed', async () => {});
  });
});