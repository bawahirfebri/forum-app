/**
* test scenario for RegisterInput
*
* - RegisterInput component
*  - should handle name typing correctly
*  - should handle email typing correctly
*  - should handle password typing correctly
*  - should call register function when register button is clicked
*/

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import RegisterInput from './RegisterInput';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'Name Test');

    expect(nameInput).toHaveValue('Name Test');
  });

  it('should handle email typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'email@test.com');

    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    const registerMock = vi.fn();
    render(<RegisterInput register={registerMock} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'Name Test');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'email@test.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    await userEvent.click(registerButton);

    expect(registerMock).toBeCalledWith({
      name: 'Name Test',
      email: 'email@test.com',
      password: 'passwordtest',
    });
  });
});