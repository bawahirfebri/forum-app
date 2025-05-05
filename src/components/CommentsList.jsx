import PropTypes from 'prop-types';
import React from 'react';
import CommentItem, { commentShape } from './CommentItem';
import Container from './styled/Container';

function CommentsList({ comments, authUserId, upVoteComment, downVoteComment }) {
  return (
    <Container>
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
    </Container>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUserId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export default CommentsList;