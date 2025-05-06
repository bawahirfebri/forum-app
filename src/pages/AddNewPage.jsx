import React from 'react';
import ThreadInput from '../components/ThreadInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import Container from '../components/styled/Container';
// import { hideLoading, showLoading } from 'react-redux-loading-bar';

function AddNewPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onAddNewThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));

    navigate('/');
  };

  return (
    <Container
      $mw='600px' $margin='56px auto 0'
      $padding='24px 16px' $gap='24px'
    >
      <h2>Buat Diskusi Baru</h2>
      <ThreadInput addNewThread={onAddNewThread} />
    </Container>
  );
}

export default AddNewPage;