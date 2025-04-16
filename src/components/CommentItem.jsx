import PropTypes from 'prop-types';
import React from 'react';
import { postedAt } from '../utils';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

function CommentItem({
  id,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
  owner,
  authUserId,
  upVoteComment,
  downVoteComment,
}) {
  const isUpVoted = upVotesBy.includes(authUserId);
  const isDownVoted = downVotesBy.includes(authUserId);

  return (
    <li className='comment-item'>
      <img src={owner.avatar}/>
      <div className='comment-item__content'>
        <div className='comment-item__content-header'>
          <p className='comment-item__content-header__name'>{owner.name}</p>
          <p className='comment-item__content-header__separator'>•</p>
          <p className='comment-item__content-header__created-at'>{postedAt(createdAt)}</p>
        </div>
        <div className='comment-item__content-body' dangerouslySetInnerHTML={{ __html: content }}/>
        <div className='comment-item__content-actions'>
          <button
            className={isUpVoted ? 'up-voted' : ''}
            type='button' onClick={() => upVoteComment(id)}
          >
            <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
          </button>
          <button
            className={isDownVoted ? 'down-voted' : ''}
            type='button'
            onClick={() => downVoteComment(id)}
          >
            <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
          </button>
        </div>
      </div>
    </li>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  authUserId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export { commentShape };

export default CommentItem;