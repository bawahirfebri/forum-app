import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadsList from '../components/ThreadsList';
import { asyncDownVoteThread, asyncUpVoteThread } from '../states/threads/action';
import AddNewThreadButton from '../components/AddNewThreadButton';
import CategoriesList from '../components/CategoriesList';
import Container from '../components/styled/Container';

function HomePage() {
  const users = useSelector((states) => states.users);
  const threads = useSelector((states) => states.threads);
  const authUser = useSelector((states) => states.authUser);

  const [activeCategory, setActiveCategory] = useState('');

  const onCategoryChange = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? '' : category));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const categoriesList = [...new Set(threads.map((thread) => thread.category))];

  const threadsList = threads
    .map((thread) => ({
      ...thread,
      owner: users.find((user) => user.id === thread.ownerId),
    }))
    .filter((thread) => thread.category.includes(activeCategory));

  if (!users.length || !threads.length) {
    return null;
  }

  return (
    <Container
      $mw='600px' $margin='56px auto 0'
      $padding='24px 16px' $gap='24px'
    >
      <CategoriesList
        categories={categoriesList}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      <ThreadsList
        threads={threadsList}
        authUserId={authUser.id}
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
      />
      <AddNewThreadButton />
    </Container>
  );
}

export default HomePage;