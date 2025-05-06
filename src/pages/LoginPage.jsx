import React from 'react';
import LoginInput from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import Text from '../components/styled/Text';
import Wrapper from '../components/styled/Wrapper';
import Container from '../components/styled/Container';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <Container
      className='login'
      $mw='450px' $height='100vh' $margin='auto'
      $padding='24px 16px' $gap='24px' $justify='center'
    >
      <Wrapper
        $background='white' $border='1px solid #c8c8c8' $width='100%'
        $radius='12px' $padding='24px' $gap='24px' $margin='1rem'
        $boxshadow='0 2px 4px rgba(0,0,0,0.1)'
      >
        <h2>Masuk</h2>
        <LoginInput login={onLogin} />
        <Text $size='14px' $color='#625F68' $weight='300'>
          Belum Punya akun? Ayo <Link to='/register'>Daftar</Link>
        </Text>
      </Wrapper>
    </Container>
  );
}

export default LoginPage;