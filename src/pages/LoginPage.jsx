import React from 'react';
import LoginInput from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <section className='login'>
      <h2>Masuk</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum Punya akun? Ayo <Link to='/register'>Daftar</Link>
      </p>
    </section>
  );
}

export default LoginPage;