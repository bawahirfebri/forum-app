import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Form from './styled/Form';
import Button from './styled/Button';
import Text from './styled/Text';

function CommentInput({ addNewComment }) {
  const [content, onContentChange, setContent] = useInput('');

  const onAddNewCommentClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addNewComment(content);

    setContent('');
  };

  return (
    <>
    <Form
      $border=' 1px solid #c8c8c8' $padding='8px' $radius='12px' $align='end'
      $borderColor='#2563eb' $boxshadow='0 0 0 1px rgba(37, 99, 235, 1)'
    >
      <textarea type='text' value={content} placeholder='Tuliskan komentar anda...' onChange={onContentChange} />
      <Button
        type='submit' onClick={onAddNewCommentClick}
        $background='#0f69e6' $padding='8px 12px' $transition='transform 0.3s ease'
        $transform='scale(0.975)' $hoverBackground='#1681fa'
      >
        <Text $color='white' $size='14px'>Comment</Text>
      </Button>
    </Form>
    </>
  );
}

CommentInput.propTypes = {
  addNewComment: PropTypes.func.isRequired,
};

export default CommentInput;