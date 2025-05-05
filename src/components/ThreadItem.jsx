import PropTypes from 'prop-types';
import React from 'react';
import { postedAt, stripHtml } from '../utils';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineModeComment } from 'react-icons/md';
import Card from './styled/Card';
import Image from './styled/Image';
import Wrapper from './styled/Wrapper';
import Button from './styled/Button';
import Text from './styled/Text';

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
    <Card role='button' onClick={onThreadClick}>
      <Image src={owner.avatar} />
      <Wrapper $width='100%'>
        <Wrapper $direction='row' $justify='space-between'>
          <Wrapper $direction='row' $align='center'>
            <Text>{owner.name}</Text>
            <Text $size='12px' $weight='300' $color='#a8a6ac'>•</Text>
            <Text $size='12px' $weight='300' $color='#a8a6ac'>{postedAt(createdAt)}</Text>
          </Wrapper>
          <Wrapper $background='#e4ecf7' $radius='6px' $padding='4px 8px'>
            <Text $size='12px' $color='#505780' $weight='500'>{category}</Text>
          </Wrapper>
        </Wrapper>
        <Wrapper $gap='2px'>
          <Text>{title}</Text>
          <Text $size='14px' $weight='300' $color='#625F68'>
            {body.length > 200 ? `${stripHtml(body).slice(0, 200)}...` : body}
          </Text>
        </Wrapper>
        <Wrapper $direction='row' $align='center'>
          <Button className={isUpVoted ? 'up-voted' : ''} type='button' onClick={onUpVoteThreadClick}>
            <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
          </Button>
          <Button className={isDownVoted ? 'down-voted' : ''} type='button' onClick={onDownVoteThreadClick}>
            <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
          </Button>
          <Button>
            <MdOutlineModeComment /> {totalComments}
          </Button>
        </Wrapper>
      </Wrapper>
    </Card>
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
