import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function CommentInput({ addNewComment }) {
  const [content, onContentChange, setContent] = useInput('');

  const onAddNewCommentClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addNewComment(content);

    setContent('');
  };

  return (
    <form className='comment-input'>
      <textarea type='text' value={content} placeholder='Tuliskan komentar anda...' onChange={onContentChange} />
      <button type='submit' onClick={onAddNewCommentClick}>Comment</button>
    </form>
  );
}

CommentInput.propTypes = {
  addNewComment: PropTypes.func.isRequired,
};

export default CommentInput;