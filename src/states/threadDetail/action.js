import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
  ADD_COMMENT_THREAD_DETAIL: 'ADD_COMMENT_THREAD_DETAIL',
  UP_VOTE_COMMENT_THREAD_DETAIL: 'UP_VOTE_COMMENT_THREAD_DETAIL',
  DOWN_VOTE_COMMENT_THREAD_DETAIL: 'DOWN_VOTE_COMMENT_THREAD_DETAIL',
  NEUTRAL_VOTE_COMMENT_THREAD_DETAIL: 'NEUTRAL_VOTE_COMMENT_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    }
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    }
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    }
  };
}

function neutralVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    }
  };
}

function addCommentThreadDetailActionCreator(content) {
  return {
    type: ActionType.ADD_COMMENT_THREAD_DETAIL,
    payload: {
      content,
    }
  };
}

function upVoteCommentThreadDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    }
  };
}

function downVoteCommentThreadDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    }
  };
}

function neutralVoteCommentThreadDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    }
  };
}

function asyncReceiveThreadDetail(id) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(id);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, useState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = useState();
    const isUpVoted = threadDetail.upVotesBy.includes(authUser.id);

    dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      if (isUpVoted) {
        await api.neutralVoteThread(threadDetail.id);
      } else {
        await api.upVoteThread(threadDetail.id);
      }
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadDetailActionCreator(authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, useState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = useState();
    const isDownVoted = threadDetail.downVotesBy.includes(authUser.id);

    dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      if (isDownVoted) {
        await api.neutralVoteThread(threadDetail.id);
      } else {
        await api.downVoteThread(threadDetail.id);
      }
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadDetailActionCreator(authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncAddCommentThreadDetail({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentThreadDetailActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteCommentThreadDetail(commentId) {
  return async (dispatch, useState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = useState();
    const comment = threadDetail.comments.find((comment) => comment.id === commentId);
    const isUpVoted = comment.upVotesBy.includes(authUser.id);

    dispatch(upVoteCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));

    try {
      if (isUpVoted) {
        await api.neutralVoteComment({ threadId: threadDetail.id, commentId });
      } else {
        await api.upVoteComment({ threadId: threadDetail.id, commentId });
      }
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteCommentThreadDetail(commentId) {
  return async (dispatch, useState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = useState();
    const comment = threadDetail.comments.find((comment) => comment.id === commentId);
    const isDownVoted = comment.downVotesBy.includes(authUser.id);

    dispatch(downVoteCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));

    try {
      if (isDownVoted) {
        await api.neutralVoteComment({ threadId: threadDetail.id, commentId });
      } else {
        await api.downVoteComment({ threadId: threadDetail.id, commentId });
      }
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralVoteThreadDetailActionCreator,
  addCommentThreadDetailActionCreator,
  upVoteCommentThreadDetailActionCreator,
  downVoteCommentThreadDetailActionCreator,
  neutralVoteCommentThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
};