/**
* test scenario for authUserReducer
*
* - authUserReducer function
*  - should return initial authUser when given by unknown action
*  - should return the authUser when given by SET_AUTH_USER action
*  - should return null when given by UNSET_AUTH_USER action
*/

import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return initial authUser when given by unknown action', () => {
    const initalState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = authUserReducer(initalState, action);

    expect(nextState).toEqual(initalState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    const initalState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          'id': 'john_doe',
          'name': 'John Doe',
          'email': 'john@example.com',
          'avatar': 'https://generated-image-url.jpg',
        },
      },
    };

    const nextState = authUserReducer(initalState, action);

    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    const initalState = {
      'id': 'john_doe',
      'name': 'John Doe',
      'email': 'john@example.com',
      'avatar': 'https://generated-image-url.jpg',
    };
    const action = { type: 'UNSET_AUTH_USER' };

    const nextState = authUserReducer(initalState, action);

    expect(nextState).toEqual(null);
  });
});