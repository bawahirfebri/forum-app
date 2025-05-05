import PropTypes from 'prop-types';
import React from 'react';
import Card from './styled/Card';
import Wrapper from './styled/Wrapper';
import Image from './styled/Image';
import Text from './styled/Text';

function LeaderboardItem({ user, score }) {
  return (
    <Card $padding='.5rem 1rem' $justify='space-between' $align='center'>
      <Wrapper $direction='row' $align='center' $gap='8px'>
        <Image $weight='40px' $height='40px' src={user.avatar}/>
        <Text>{user.name}</Text>
      </Wrapper>
      <Text>{score}</Text>
    </Card>
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