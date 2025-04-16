import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLoginClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    login({ email, password });
  };

  return (
    <form className='login-input'>
      <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <button type='submit' onClick={onLoginClick}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;