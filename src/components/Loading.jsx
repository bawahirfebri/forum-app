import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import Wrapper from './styled/Wrapper';

function Loading() {
  return (
    <Wrapper $position='sticky' $top='0' $zIndex='2'>
      <LoadingBar  />
    </Wrapper>
  );
}

export default Loading;