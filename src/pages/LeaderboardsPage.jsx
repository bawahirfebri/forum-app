import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardsList from '../components/LeaderboardsList';
import Container from '../components/styled/Container';

function LeaderboardsPage() {
  const dispatch = useDispatch();

  const leaderboards = useSelector((states) => states.leaderboards);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <Container
      $mw='600px' $margin='56px auto 0'
      $padding='24px 16px' $gap='24px'
    >
      <h2>Klasemen Pengguna Aktif</h2>
      <LeaderboardsList leaderboards={leaderboards} />
    </Container>
  );
}

export default LeaderboardsPage;