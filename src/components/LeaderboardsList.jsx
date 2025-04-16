import PropTypes from 'prop-types';
import React from 'react';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <>
      <ul className='leaderboards-list'>
        <li className='leaderboard-item-header'>
          <p className='leaderboard-item-user'>Pengguna</p>
          <p className='leaderboard-item-score'>Skor</p>
        </li>
        {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
          ))
        }
      </ul>
    </>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardsList;