/**
* test scenario for usersReducer
*
* - usersReducer function
*  - should return initial users when given by unknown action
*  - should return the users when given by RECEIVE_USERS action
*/

import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return initial users when given by unknown action', () => {
    const initalState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = usersReducer(initalState, action);

    expect(nextState).toEqual(initalState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    const initalState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            'id': 'john_doe',
            'name': 'John Doe',
            'email': 'john@example.com',
            'avatar': 'https://generated-image-url.jpg'
          },
          {
            'id': 'jane_doe',
            'name': 'Jane Doe',
            'email': 'jane@example.com',
            'avatar': 'https://generated-image-url.jpg'
          },
          {
            'id': 'fulan',
            'name': 'Si Fulan',
            'email': 'fulan@example.com',
            'avatar': 'https://generated-image-url.jpg'
          }
        ]
      }
    };

    const nextState = usersReducer(initalState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});