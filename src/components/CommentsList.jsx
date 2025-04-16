import PropTypes from 'prop-types';
import React from 'react';
import CommentItem, { commentShape } from './CommentItem';

function CommentsList({ comments, authUserId, upVoteComment, downVoteComment }) {
  return (
    <ul className='comments-list'>
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            authUserId={authUserId}
            upVoteComment={upVoteComment}
            downVoteComment={downVoteComment}
          />
        ))
      }
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUserId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export default CommentsList;