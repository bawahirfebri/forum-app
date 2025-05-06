import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Input from './styled/Input';
import Button from './styled/Button';
import Text from './styled/Text';
import Form from './styled/Form';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLoginClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    login({ email, password });
  };

  return (
    <Form>
      <Input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <Input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <Button
        type='submit' onClick={onLoginClick}
        $background='#0f69e6' $padding='12px' $justify='center'
        $hoverBackground='none' $transition='transform 0.3s ease'
        $transform='scale(0.975)'
      >
        <Text $color='white' $size='14px'>Login</Text>
      </Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;