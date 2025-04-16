/**
* test scenario for threadsReducer
*
* - threadsReducer function
*  - should return initial threads when given by unknwon action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with new thread when given by ADD_THREAD action
*  - should return the threads with up-voted thread when given by UP_VOTE_THREAD action
*  - should return the threads with down-voted thread when given by DOWN_VOTE_THREAD action
*  - should return the threads with neutral-voted thread when given by NEUTRAL_VOTE_THREAD action
*/

import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return initial threads when given by unknwon action', () => {
    const initalState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual(initalState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    const initalState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            'id': 'thread-1',
            'title': 'Thread Pertama',
            'body': 'Ini adalah thread pertama',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-1',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          },
          {
            'id': 'thread-2',
            'title': 'Thread Kedua',
            'body': 'Ini adalah thread kedua',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-2',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          }
        ]
      }
    };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with new thread when given by ADD_THREAD action', () => {
    const initalState = [{
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'ownerId': 'users-1',
      'upVotesBy': [],
      'downVotesBy': [],
      'totalComments': 0
    }];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          'id': 'thread-2',
          'title': 'Thread Kedua',
          'body': 'Ini adalah thread kedua',
          'category': 'General',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'ownerId': 'users-2',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0
        },
      }
    };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual([action.payload.thread, ...initalState]);
  });

  it('should return the threads with up-voted thread when given by UP_VOTE_THREAD action', () => {
    const initalState = [{
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'ownerId': 'users-1',
      'upVotesBy': [],
      'downVotesBy': [],
      'totalComments': 0,
    }];
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual([{
      ...initalState[0],
      upVotesBy: [action.payload.userId],
    }]);
  });

  it('should return the threads with down-voted thread when given by DOWN_VOTE_THREAD action', () => {
    const initalState = [{
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'ownerId': 'users-1',
      'upVotesBy': [],
      'downVotesBy': [],
      'totalComments': 0,
    }];
    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual([{
      ...initalState[0],
      downVotesBy: [action.payload.userId],
    }]);
  });

  it('should return the threads with neutral-voted thread when given by NEUTRAL_VOTE_THREAD action', () => {
    // neutral up-vote thread when already upvoted test
    const initalState = [{
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'ownerId': 'users-1',
      'upVotesBy': ['users-1'],
      'downVotesBy': [],
      'totalComments': 0,
    }];
    const action = {
      type: 'NEUTRAL_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    const nextState = threadsReducer(initalState, action);

    expect(nextState).toEqual([{
      ...initalState[0],
      upVotesBy: [],
    }]);

    // neutral down-vote thread when already upvoted test
    const initalState2 = [{
      'id': 'thread-1',
      'title': 'Thread Pertama',
      'body': 'Ini adalah thread pertama',
      'category': 'General',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'ownerId': 'users-1',
      'upVotesBy': [],
      'downVotesBy': ['users-1'],
      'totalComments': 0,
    }];

    const nextState2 = threadsReducer(initalState2, action);

    expect(nextState2).toEqual([{
      ...initalState2[0],
      downVotesBy: [],
    }]);
  });
});