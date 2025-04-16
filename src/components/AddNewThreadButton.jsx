import React from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function AddNewThreadButton() {
  const navigate = useNavigate();

  const onAddNewThread = () => {
    navigate('/new');
  };

  return (
    <button className='add-new-thread' onClick={onAddNewThread}>
      <MdOutlineAdd />
    </button>
  );
}

export default AddNewThreadButton;