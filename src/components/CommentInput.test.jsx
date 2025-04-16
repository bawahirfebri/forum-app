/**
* test scenario for CommentInput
*
* - CommentInput component
*  - should handle comment typing correctly
*  - should call add new comment function when comment button is clicked
*/

import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import CommentInput from './CommentInput';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

describe('CommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    render(<CommentInput addNewComment={() => {}} />);
    const commentInput = await screen.getByPlaceholderText('Tuliskan komentar anda...');

    await userEvent.type(commentInput, 'Comment test');

    expect(commentInput).toHaveValue('Comment test');
  });

  it('should call add new comment function when comment button is clicked', async () => {
    const addNewCommentMock = vi.fn();
    render(<CommentInput addNewComment={addNewCommentMock} />);
    const commentInput = await screen.getByPlaceholderText('Tuliskan komentar anda...');
    await userEvent.type(commentInput, 'Comment test');
    const commentButton = await screen.getByRole('button', { name: 'Comment' });

    await userEvent.click(commentButton);

    expect(addNewCommentMock).toBeCalledWith('Comment test');
  });
});