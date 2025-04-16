import PropTypes from 'prop-types';
import React from 'react';
import { postedAt, stripHtml } from '../utils';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineModeComment } from 'react-icons/md';
import Card from './styled/Card';

function ThreadItem({ id, title, body, category, createdAt, upVotesBy = [], downVotesBy = [], totalComments, owner, authUserId, upVote, downVote }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onUpVoteThreadClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteThreadClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const isUpVoted = upVotesBy.includes(authUserId);
  const isDownVoted = downVotesBy.includes(authUserId);

  return (
    <>
      <li className='thread-item' role='button' onClick={onThreadClick}>
        <img src={owner.avatar} />
        <div>
          <div className='thread-item__owner'>
            <div className='thread-item__owner-info'>
              <p className='thread-item__owner-name'>{owner.name}</p>
              <p className='thread-item__owner-separator'>•</p>
              <p className='thread-item__owner-created-at'>{postedAt(createdAt)}</p>
            </div>
            <p className='thread-item__owner-category-thread-info'>{category}</p>
          </div>
          <div className='thread-item__content'>
            <p className='thread-item__content-title'>{title}</p>
            <p className='thread-item__content-body'>{body.length > 200 ? `${stripHtml(body).slice(0, 200)}...` : body}</p>
          </div>
          <div className='thread-item__actions'>
            <button className={isUpVoted ? 'up-voted' : ''} type='button' onClick={onUpVoteThreadClick}>
              <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
            </button>
            <button className={isDownVoted ? 'down-voted' : ''} type='button' onClick={onDownVoteThreadClick}>
              <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
            </button>
            <button>
              <MdOutlineModeComment /> {totalComments}
            </button>
          </div>
        </div>
      </li>
      <Card role='button' onClick={onThreadClick}>
        <img src={owner.avatar} />
        <div>
          <div className='thread-item__owner'>
            <div className='thread-item__owner-info'>
              <p className='thread-item__owner-name'>{owner.name}</p>
              <p className='thread-item__owner-separator'>•</p>
              <p className='thread-item__owner-created-at'>{postedAt(createdAt)}</p>
            </div>
            <p className='thread-item__owner-category-thread-info'>{category}</p>
          </div>
          <div className='thread-item__content'>
            <p className='thread-item__content-title'>{title}</p>
            <p className='thread-item__content-body'>{body.length > 200 ? `${stripHtml(body).slice(0, 200)}...` : body}</p>
          </div>
          <div className='thread-item__actions'>
            <button className={isUpVoted ? 'up-voted' : ''} type='button' onClick={onUpVoteThreadClick}>
              <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
            </button>
            <button className={isDownVoted ? 'down-voted' : ''} type='button' onClick={onDownVoteThreadClick}>
              <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
            </button>
            <button>
              <MdOutlineModeComment /> {totalComments}
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUserId: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
