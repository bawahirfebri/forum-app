import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import CommentInput from './CommentInput';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineModeComment } from 'react-icons/md';
import { commentShape } from './CommentItem';

function ThreadDetail({
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  comments,
  owner,
  authUserId,
  upVoteThread,
  downVoteThread,
  addNewComment,
  upVoteComment,
  downVoteComment,
}) {
  const isUpVoted = upVotesBy.includes(authUserId);
  const isDownVoted = downVotesBy.includes(authUserId);

  return (
    <div className='thread-detail'>
      <div className='thread-detail__content'>
        <div className='thread-detail__content-header'>
          <img src={owner.avatar}/>
          <div className='thread-detail__content-header__info'>
            <div className='thread-detail__content-header__info-user'>
              <p className='thread-detail__content-header__info-user__name'>{owner.name}</p>
              <p className='thread-detail__content-header__info-user__separator'>•</p>
              <p className='thread-detail__content-header__info-user__created-at'>{postedAt(createdAt)}</p>
            </div>
            <p className='thread-detail__content-header__info-category'>{category}</p>
          </div>
        </div>
        <div className='thread-detail__content-body'>
          <p className='thread-detail__content-body__title'>{title}</p>
          <div
            className='thread-detail__content-body__body'
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
        <div className='thread-detail__content-actions'>
          <button
            className={isUpVoted ? 'up-voted' : ''}
            type='button' onClick={upVoteThread}
          >
            <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
          </button>
          <button
            className={isDownVoted ? 'down-voted' : ''}
            type='button'
            onClick={downVoteThread}
          >
            <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
          </button>
          <button><MdOutlineModeComment /> {comments.length}</button>
        </div>
      </div>
      <CommentInput addNewComment={addNewComment} />
      <CommentsList
        comments={comments}
        authUserId={authUserId}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
      />
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  authUserId: PropTypes.string.isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export default ThreadDetail;