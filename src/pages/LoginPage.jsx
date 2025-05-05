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
      $background='radial-gradient(circle, rgba(22,129,250,1) 0%, rgba(20,88,194,1) 100%)'
      $height='100vh' $justify='center' $align='center'
    >
      <Wrapper 
        className='login'
        $background='white' $border='1px solid #c8c8c8' $width='400px'
        $radius='12px' $padding='24px' $gap='24px' $margin='1rem'
        boxShadow='0 2px 4px rgba(0,0,0,0.1)'
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