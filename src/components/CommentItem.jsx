import PropTypes from 'prop-types';
import React from 'react';
import { postedAt } from '../utils';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Card from './styled/Card';
import Image from './styled/Image';
import Wrapper from './styled/Wrapper';
import Text from './styled/Text';
import Button from './styled/Button';
import BodyText from './styled/BodyText';

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
    <Card $padding='12px'>
      <Image src={owner.avatar} $weight='40px' $height='40'/>
      <Wrapper>
        <Wrapper $direction='row' $align='center'>
          <Text $weight='500'>{owner.name}</Text>
          <Text $size='12px' $color='#a8a6ac' $weight='300'>•</Text>
          <Text $size='12px' $color='#a8a6ac' $weight='300'>{postedAt(createdAt)}</Text>
        </Wrapper>
        <BodyText className='comment-item__body' dangerouslySetInnerHTML={{ __html: content }}/>
        <Wrapper $direction='row'>
          <Button
            $size='14px'
            className={isUpVoted ? 'up-voted' : ''}
            type='button' onClick={() => upVoteComment(id)}
          >
            <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
          </Button>
          <Button
            $size='14px'
            className={isDownVoted ? 'down-voted' : ''}
            type='button'
            onClick={() => downVoteComment(id)}
          >
            <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
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