/**
* test scenario for ThreadInput
*
* - ThreadInput component
*  - should handle title typing correctly
*  - should handle category typing correctly
*  - should handle body typing correctly
*  - should call add new thread function when post button is clicked
*/

import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ThreadInput from './ThreadInput';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    render(<ThreadInput addNewThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    await userEvent.type(titleInput, 'Thread Test');

    expect(titleInput).toHaveValue('Thread Test');
  });

  it('should handle category typing correctly', async () => {
    render(<ThreadInput addNewThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    await userEvent.type(categoryInput, 'Category Test');

    expect(categoryInput).toHaveValue('Category Test');
  });

  it('should handle body typing correctly', async () => {
    render(<ThreadInput addNewThread={() => {}} />);
    const bodyInput = await screen.getByLabelText('body');

    await userEvent.type(bodyInput, 'Body Test');

    expect(bodyInput.textContent).toBe('Body Test');
  });

  it('should call add new thread function when post button is clicked', async () => {
    const addNewThreadMock = vi.fn();
    render(<ThreadInput addNewThread={addNewThreadMock} />);
    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'Thread Test');
    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'Category Test');
    const bodyInput = await screen.getByLabelText('body');
    await userEvent.type(bodyInput, 'Body Test');
    const postButton = await screen.getByRole('button', { name: 'Post' });

    await userEvent.click(postButton);

    expect(addNewThreadMock).toBeCalledWith({
      title: 'Thread Test',
      category: 'Category Test',
      body: 'Body Test',
    });
  });
});