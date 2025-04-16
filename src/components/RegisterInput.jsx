import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onRegisterClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    register({ name, email, password });
  };

  return (
    <form className='register-input'>
      <input type='text' placeholder='Name' value={name} onChange={onNameChange} />
      <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <button type='submit' onClick={onRegisterClick}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;