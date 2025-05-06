import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Form from './styled/Form';
import Input from './styled/Input';
import Button from './styled/Button';
import Text from './styled/Text';

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
    <Form>
      <Input type='text' placeholder='Name' value={name} onChange={onNameChange} />
      <Input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <Input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <Button
        type='submit' onClick={onRegisterClick}
        $background='#0f69e6' $padding='12px' $justify='center'
        $hoverBackground='#1681fa' $transition='transform 0.3s ease'
        $transform='scale(0.975)'
      >
        <Text $color='white' $size='14px' >Register</Text>
      </Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;