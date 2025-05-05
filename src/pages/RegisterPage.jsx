import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import Text from '../components/styled/Text';
import Wrapper from '../components/styled/Wrapper';
import Container from '../components/styled/Container';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <Container
      $background='radial-gradient(circle, rgba(22,129,250,1) 0%, rgba(20,88,194,1) 100%)'
      $height='100vh' $justify='center' $align='center'
    >
      <Wrapper 
        className='register'
        $background='white' $border='1px solid #c8c8c8' $width='400px'
        $radius='12px' $padding='24px' $gap='24px' $margin='1rem'
        boxShadow='0 2px 4px rgba(0,0,0,0.1)'
      >
        <h2>Daftar</h2>
        <RegisterInput register={onRegister} />
        <Text $size='14px' $color='#625F68' $weight='300'>
          Sudah punya akun? <Link to='/login'>Masuk sekarang</Link>
        </Text>
      </Wrapper>
    </Container>
  );
}

export default RegisterPage;