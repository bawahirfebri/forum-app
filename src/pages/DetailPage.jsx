import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncAddCommentThreadDetail, asyncDownVoteCommentThreadDetail, asyncDownVoteThreadDetail, asyncReceiveThreadDetail, asyncUpVoteCommentThreadDetail, asyncUpVoteThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import Container from '../components/styled/Container';

function DetailPage() {
  const { id } = useParams();

  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVoteThread = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onAddNewComment = (content) => {
    dispatch(asyncAddCommentThreadDetail({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteCommentThreadDetail(commentId));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteCommentThreadDetail(commentId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <Container
      $mw='600px' $margin='56px auto 0'
      $padding='24px 16px' $gap='24px'
    >
      <ThreadDetail
        {...threadDetail}
        authUserId={authUser.id}
        upVoteThread={onUpVoteThread}
        downVoteThread={onDownVoteThread}
        addNewComment={onAddNewComment}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
      />
    </Container>
  );
}

export default DetailPage;