import PropTypes from 'prop-types';
import React from 'react';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';
import Card from './styled/Card';
import Text from './styled/Text';
import Container from './styled/Container';

function LeaderboardsList({ leaderboards }) {
  return (
    <>
      <Container $gap='4px'>
        <Card $padding='.5rem 1rem' $justify='space-between' $align='center' $transform='none' $cursor='default'>
          <Text $weight='500'>Pengguna</Text>
          <Text $weight='500'>Skor</Text>
        </Card>
        {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
          ))
        }
      </Container>
    </>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardsList;