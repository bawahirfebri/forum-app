/**
* test scenario for leaderboardsReducer
*
* - leaderboardsReducer function
*  - should return initial leaderboards when given by unknown action
*  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
*/

import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return initial leaderboards when given by unknown action', () => {
    const initalState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = leaderboardsReducer(initalState, action);

    expect(nextState).toEqual(initalState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    const initalState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            'user': {
              'id': 'users-1',
              'name': 'John Doe',
              'email': 'john@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 10
          },
          {
            'user': {
              'id': 'users-2',
              'name': 'Jane Doe',
              'email': 'jane@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 5
          }
        ]
      }
    };

    const nextState = leaderboardsReducer(initalState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});