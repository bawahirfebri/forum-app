import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import AddNewPage from './pages/AddNewPage';
import Loading from './components/Loading';
import Navigation from './components/Navigation';

function App() {
  const navigate = useNavigate();

  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());

    navigate('/');
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className='app-container'>
          <main>
            <Routes>
              <Route path='/*' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className='app-container'>
        <header>
          <Navigation signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/threads/:id' element={<DetailPage />} />
            <Route path='/new' element={<AddNewPage />} />
            <Route path='/leaderboards' element={<LeaderboardsPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;