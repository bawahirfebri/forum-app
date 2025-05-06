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
      className='register'
      $mw='450px' $height='100vh' $margin='auto'
      $padding='24px 16px' $gap='24px' $justify='center'
    >
      <Wrapper
        $background='white' $border='1px solid #c8c8c8' $width='100%'
        $radius='12px' $padding='24px' $gap='24px' $margin='1rem'
        $boxshadow='0 2px 4px rgba(0,0,0,0.1)'
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