import React from 'react';
import ThreadInput from '../components/ThreadInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
// import { hideLoading, showLoading } from 'react-redux-loading-bar';

function AddNewPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onAddNewThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));

    navigate('/');
  };

  return (
    <section className='add-new'>
      <h2>Buat Diskusi Baru</h2>
      <ThreadInput addNewThread={onAddNewThread} />
    </section>
  );
}

export default AddNewPage;