import PropTypes from 'prop-types';
import React from 'react';

function LeaderboardItem({ user, score }) {
  return (
    <li className='leaderboard-item'>
      <div className='leaderboard-item-user'>
        <img src={user.avatar}/>
        <p>{user.name}</p>
      </div>
      <p className='leaderboard-item-score'>{score}</p>
    </li>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(ownerShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;