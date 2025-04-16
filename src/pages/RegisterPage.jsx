import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <section className='register'>
      <h2>Daftar</h2>
      <RegisterInput register={onRegister} />
      <p>
        Sudah punya akun? <Link to='/login'>Masuk sekarang</Link>
      </p>
    </section>
  );
}

export default RegisterPage;