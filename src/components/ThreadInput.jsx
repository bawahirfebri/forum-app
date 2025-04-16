import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function ThreadInput({ addNewThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');

  const onBodyChange = ({ target }) => {
    setBody(target.textContent);
  };

  const onAddNewThreadClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    addNewThread({ title, category, body });
  };

  return (
    <form className='thread-input'>
      <input className='thread-input__title' type='text' placeholder='Judul' value={title} onChange={onTitleChange} />
      <input className='thread-input__category' type='text' placeholder='Kategori' value={category} onChange={onCategoryChange} />
      <div className='thread-input__body' contentEditable='true' aria-label='body' onInput={onBodyChange} />
      <button type='submit' onClick={onAddNewThreadClick}>Post</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addNewThread: PropTypes.func.isRequired,
};

export default ThreadInput;