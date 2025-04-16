import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardsList from '../components/LeaderboardsList';

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
    <section className='leaderboards'>
      <h2>Klasemen Pengguna Aktif</h2>
      <LeaderboardsList leaderboards={leaderboards} />
    </section>
  );
}

export default LeaderboardsPage;