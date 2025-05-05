import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Form from './styled/Form';
import Button from './styled/Button';
import Text from './styled/Text'
import Input from './styled/Input';

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
    <Form>
      <Input type='text' placeholder='Judul' value={title} onChange={onTitleChange} />
      <Input type='text' placeholder='Kategori' value={category} onChange={onCategoryChange} />
      <div className='thread-input__body' contentEditable='true' aria-label='body' onInput={onBodyChange} />
      <Button 
        type='submit' onClick={onAddNewThreadClick}
        $background='#0f69e6' $padding='12px' $justify='center'
        $hoverBackground='#1681fa' $transition='transform 0.3s ease'
        $transform='scale(0.975)'
      >
        <Text $color='white' $size='14px'>Post</Text>
      </Button>
    </Form>
  );
}

ThreadInput.propTypes = {
  addNewThread: PropTypes.func.isRequired,
};

export default ThreadInput;