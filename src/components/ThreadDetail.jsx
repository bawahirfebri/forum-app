import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import CommentInput from './CommentInput';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineModeComment } from 'react-icons/md';
import { commentShape } from './CommentItem';
import Container from './styled/Container';
import Wrapper from './styled/Wrapper';
import Image from './styled/Image';
import Text from './styled/Text';
import Button from './styled/Button';
import BodyText from './styled/BodyText';

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
    <Container $gap='16px'>
      <Container>
        <Wrapper $direction='row' $gap='8px'>
          <Image $width='48px' $height='48px' src={owner.avatar}/>
          <Wrapper $align='flex-start'>
            <Wrapper $direction='row' $align='center'>
              <Text $weight='500'>{owner.name}</Text>
              <Text $size='12px' $color='#a8a6ac' $weight='300'>•</Text>
              <Text $size='12px' $color='#a8a6ac' $weight='300'>{postedAt(createdAt)}</Text>
            </Wrapper>
            <Wrapper $background='#e4ecf7' $radius='6px' $padding='4px 8px'>
              <Text $size='12px' $color='#505780' $weight='500'>{category}</Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Text $size='20px' $weight='500'>{title}</Text>
          <BodyText
            className='thread-detail__body'
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </Wrapper>
        <Wrapper $direction='row' $align='center' $gap='8px'>
          <Button
            className={isUpVoted ? 'up-voted' : ''}
            type='button' onClick={upVoteThread}
          >
            <MdOutlineKeyboardArrowUp /> {upVotesBy.length}
          </Button>
          <Button
            className={isDownVoted ? 'down-voted' : ''}
            type='button'
            onClick={downVoteThread}
          >
            <MdOutlineKeyboardArrowDown /> {downVotesBy.length}
          </Button>
          <Button><MdOutlineModeComment /> {comments.length}</Button>
        </Wrapper>
      </Container>
      <CommentInput addNewComment={addNewComment} />
      <CommentsList
        comments={comments}
        authUserId={authUserId}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
      />
    </Container>
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