/**
* test scenario for asyncPopulateUsersAndThreads
*
* - asyncPopulateUsersAndThreads thunk
*  - should dispatch action correctly when data fecthing success
*  - should dispatch action and call alert correctly when data fetching failed
*/

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadActionCreator } from '../threads/action';

const fakeUsersResponse = [
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
  },
];

const fakeThreadsResponse = [
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
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api.getAllUsers;
    delete api.getAllThreads;
  });

  it('should dispatch action correctly when data fecthing success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});