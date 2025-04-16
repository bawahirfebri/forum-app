import PropTypes from 'prop-types';
import React from 'react';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads, authUserId, upVote, downVote }) {
  return (
    <ul className='threads-list'>
      {
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            authUserId={authUserId}
            upVote={upVote}
            downVote={downVote}
          />
        ))
      }
    </ul>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  authUserId: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;